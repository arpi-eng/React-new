import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';

export default function Contact() {
  const [form, setForm] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}, your message has been sent!`);
    setForm({ name: '', message: '' });
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '1rem', marginTop: '1rem' }}>
        <Typography variant="h5" gutterBottom>Contact Me</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
