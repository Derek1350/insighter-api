// server.mjs
import express from 'express';
import passport from 'passport';
import LinkedInStrategy from 'passport-linkedin-oauth2';
import session from 'express-session';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://Admin-Tanzeel:Test123@cluster0.uw3gnpd.mongodb.net/insighter', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

// Define User model (replace this with your actual User model)
const User = mongoose.model('LinkedinUser', { linkedinId: String, displayName: String });

// LinkedIn authentication strategy
passport.use(new LinkedInStrategy.Strategy({
  clientID: '784x2s1q45sem3',
  clientSecret: 'JdNYrFwOhwAaAtiz',
  callbackURL: 'http://localhost:8000/auth/linkedin/callback',
}, (accessToken, refreshToken, profile, done) => {
  // Save user profile to database or retrieve user from database
  // For simplicity, I'm assuming a User model already exists
  User.findOne({ linkedinId: profile.id }, (err, user) => {
    if (err) return done(err);
    if (!user) {
      const newUser = new User({
        linkedinId: profile.id,
        displayName: profile.displayName,
        // Other profile data to save
      });
      newUser.save((err) => {
        if (err) console.error(err);
        return done(null, newUser);
      });
    } else {
      return done(null, user);
    }
  });
}));

// Serialization and deserialization of user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Routes
app.get('/auth/linkedin', passport.authenticate('linkedin'));

app.get('/auth/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

// Start server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
