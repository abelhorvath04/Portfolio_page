import React from 'react'

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="bg-primary bg-gradient">All rights reserved &copy; {year}</footer>
  )
}
