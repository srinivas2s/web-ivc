// IVC Club Backend Server (Node.js)
// All backend code in one file as requested

const express = require('express');
const path = require('path');
const cors = require('cors');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from Next.js build (when deployed)
app.use(express.static(path.join(__dirname, 'out')));

// API Routes
// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'IVC Backend Server is running',
        timestamp: new Date().toISOString()
    });
});

// Get club information
app.get('/api/club-info', (req, res) => {
    res.json({
        name: 'Innovators and Visionaries Club',
        tagline: 'Ideate, Visualize, Create',
        college: 'VVCE - Vidyavardhaka College of Engineering',
        location: 'Mysuru',
        established: '2024',
        description: 'A student-driven club fostering innovation, creativity, and technical excellence.'
    });
});

// Contact form endpoint (placeholder for future implementation)
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
        return res.status(400).json({
            error: 'Missing required fields',
            required: ['name', 'email', 'message']
        });
    }

    // TODO: Implement email sending or database storage
    console.log('Contact form submission:', { name, email, message });

    res.json({
        success: true,
        message: 'Thank you for your interest! We will get back to you soon.'
    });
});

// Join club endpoint (placeholder for future implementation)
app.post('/api/join', (req, res) => {
    const { name, email, phone, department, year } = req.body;

    // Validate input
    if (!name || !email || !phone) {
        return res.status(400).json({
            error: 'Missing required fields',
            required: ['name', 'email', 'phone']
        });
    }

    // TODO: Implement database storage for member registrations
    console.log('New member registration:', { name, email, phone, department, year });

    res.json({
        success: true,
        message: 'Welcome to IVC! Your registration has been received.'
    });
});

// Events endpoint (placeholder - can be expanded later)
app.get('/api/events', (req, res) => {
    res.json({
        events: [
            {
                id: 1,
                title: 'Hackathon 2026',
                date: '2026-02-15',
                description: 'Annual coding marathon',
                status: 'upcoming'
            },
            {
                id: 2,
                title: 'Tech Talk Series',
                date: '2026-01-25',
                description: 'Industry experts sharing insights',
                status: 'upcoming'
            }
        ]
    });
});

// Catch-all route for Next.js (when serving static build)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: err.message
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   IVC Backend Server Running                              ║
║   Innovators and Visionaries Club                         ║
║                                                           ║
║   Port: ${PORT}                                            ║
║   Environment: ${process.env.NODE_ENV || 'development'}                              ║
║   Time: ${new Date().toLocaleString()}                ║
║                                                           ║
║   API Endpoints:                                          ║
║   - GET  /api/health                                      ║
║   - GET  /api/club-info                                   ║
║   - POST /api/contact                                     ║
║   - POST /api/join                                        ║
║   - GET  /api/events                                      ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('\nSIGINT received, shutting down gracefully...');
    process.exit(0);
});

module.exports = app;
