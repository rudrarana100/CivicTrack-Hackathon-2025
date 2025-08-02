import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
public class CivicTrackLogin {
    private static String registeredUsername;
    private static String registeredPassword;
    public static void main(String[] args) {
        showRegistrationForm();
    }
    public static void showRegistrationForm() {
        JFrame regFrame = new JFrame("CivicTrack - Register");
        regFrame.setSize(350, 200);
        regFrame.setLayout(new GridLayout(4, 1));
        regFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JLabel regLabel = new JLabel("Register New Account", SwingConstants.CENTER);
        regLabel.setFont(new Font("Arial", Font.BOLD, 16));
        regFrame.add(regLabel);
        JPanel userPanel = new JPanel();
        JLabel userLabel = new JLabel("New Username: ");
        JTextField userField = new JTextField(15);
        userPanel.add(userLabel);
        userPanel.add(userField);
        regFrame.add(userPanel);
        JPanel passPanel = new JPanel();
        JLabel passLabel = new JLabel("New Password: ");
        JPasswordField passField = new JPasswordField(15);
        passPanel.add(passLabel);
        passPanel.add(passField);
        regFrame.add(passPanel);
        JButton registerBtn = new JButton("Register");
        regFrame.add(registerBtn);
        registerBtn.addActionListener(e -> {
            registeredUsername = userField.getText();
            registeredPassword = new String(passField.getPassword());
            if (!registeredUsername.isEmpty() && !registeredPassword.isEmpty()) {
                JOptionPane.showMessageDialog(regFrame, "✅ Registered Successfully!");
                regFrame.dispose(); 
                showLoginForm();    
            } else {
                JOptionPane.showMessageDialog(regFrame, "❗ Please enter both username and password.", "Error", JOptionPane.ERROR_MESSAGE);
            }
        });
        regFrame.setLocationRelativeTo(null);
        regFrame.setVisible(true);
    }
    public static void showLoginForm() {
        JFrame loginFrame = new JFrame("CivicTrack - Login");
        loginFrame.setSize(350, 200);
        loginFrame.setLayout(new GridLayout(4, 1));
        loginFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        JLabel loginLabel = new JLabel("Login to CivicTrack", SwingConstants.CENTER);
        loginLabel.setFont(new Font("Arial", Font.BOLD, 16));
        loginFrame.add(loginLabel);
        JPanel userPanel = new JPanel();
        JLabel userLabel = new JLabel("Username: ");
        JTextField userField = new JTextField(15);
        userPanel.add(userLabel);
        userPanel.add(userField);
        loginFrame.add(userPanel);
        JPanel passPanel = new JPanel();
        JLabel passLabel = new JLabel("Password: ");
        JPasswordField passField = new JPasswordField(15);
        passPanel.add(passLabel);
        passPanel.add(passField);
        loginFrame.add(passPanel);
        JButton loginBtn = new JButton("Login");
        loginFrame.add(loginBtn);
        loginBtn.addActionListener(e -> {
            String enteredUsername = userField.getText();
            String enteredPassword = new String(passField.getPassword());
            if (enteredUsername.equals(registeredUsername) && enteredPassword.equals(registeredPassword)) {
                JOptionPane.showMessageDialog(loginFrame, "✅ Login Successful!");
            } else {
                JOptionPane.showMessageDialog(loginFrame, "❌ Invalid Credentials!", "Login Failed", JOptionPane.ERROR_MESSAGE);
            }
        });
        loginFrame.setLocationRelativeTo(null);
        loginFrame.setVisible(true);
    }
}
