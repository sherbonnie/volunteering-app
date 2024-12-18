import 'package:flutter/material.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Profile"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text('Name: Sherin'),
            const SizedBox(height: 10),
            const Text('Email: john.doe@example.com'),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Arahkan kembali ke halaman Home
                Navigator.pushNamed(context, '/home');
              },
              child: const Text('Back to Home'),
            ),
          ],
        ),
      ),
    );
  }
}
