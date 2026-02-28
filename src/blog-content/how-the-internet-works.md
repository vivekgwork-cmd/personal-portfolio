---
title: What Happens When You Type a URL?
date: 2026-02-28
excerpt: A simple action that triggers one of the most complex processes on the internet.
readTime: 3 min read
---

## You hit Enter… now what?

Typing a URL into your browser feels instant.

But behind that single action lies a beautifully orchestrated chain of events that happens in milliseconds.

Let’s break down the invisible journey your request takes 👇

---

## Step 1: The Browser Checks Locally First

Before going out to the internet, your browser asks:

> “Do I already know this?”

It checks:

- Cache (have I visited this before?)
- DNS cache (do I already know the IP address?)

If found → skip ahead 🚀  
If not → move to the next step.

---

## Step 2: DNS Lookup Begins

Humans understand:


www.example.com


But the internet understands:


142.250.183.196


So your system asks a **DNS server**:

👉 “What is the IP address for this domain?”

This may involve:

- Your OS cache  
- Router cache  
- ISP DNS server  
- Root DNS servers  

Eventually → You get the IP address.

---

## Step 3: TCP Handshake (Connection Setup)

Now your system knows **where** to go.

It establishes a connection using something called the **3-way handshake**:

1. Client → “Hello, can we talk?”  
2. Server → “Yes, I'm ready.”  
3. Client → “Great, let’s begin.”  

Connection established ✅

---

## Step 4: TLS Handshake (If HTTPS)

If the site uses HTTPS (which most do):

A secure tunnel is created.

This involves:

- Certificate verification  
- Key exchange  
- Encrypted communication setup  

Now your connection is **private & secure 🔐**

---

## Step 5: The HTTP Request is Sent

Your browser now sends:


GET /
Host: example.com

Basically:

> “Hey server, give me the homepage.”

---

## Step 6: Server Processing

The server receives your request and decides:

- Is this a static page?  
- Do I need to run backend logic?  
- Should I fetch data from a database?  

Then it prepares a response.

---

## Step 7: The HTTP Response Returns

The server sends back:

- HTML  
- CSS  
- JS  
- Images  
- Status code (like 200 OK)  

Your browser receives the raw data.

---

## Step 8: Browser Rendering Begins

Now the browser:

1. Parses HTML → Builds DOM  
2. Parses CSS → Builds Style Tree  
3. Runs JS → Modifies page  
4. Creates Render Tree  
5. Paints pixels 🎨  

And finally…

---

## The Page Appears ✨

What felt like an instant action actually involved:

- DNS resolution  
- Network handshakes  
- Encryption  
- Server logic  
- Rendering engine work  

All completed in milliseconds.

---

## Next Time You Hit Enter...

Remember:

You didn’t just open a website.

You triggered a global, distributed, secure conversation across the internet 🌍
