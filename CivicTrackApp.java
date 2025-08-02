import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.io.File;
import java.util.ArrayList;
public class CivicTrackApp {
    private static String registeredUsername;
    private static String registeredPassword;
    private static ArrayList<File> selectedPhotos = new ArrayList<>();
    private static JLabel photoLabel;
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
            registeredUsername = userField.getText().trim();
            registeredPassword = new String(passField.getPassword()).trim();
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
            String enteredUsername = userField.getText().trim();
            String enteredPassword = new String(passField.getPassword()).trim();
            if (enteredUsername.equals(registeredUsername) && enteredPassword.equals(registeredPassword)) {
                JOptionPane.showMessageDialog(loginFrame, "✅ Login Successful!");
                loginFrame.dispose();
                showDashboard();
            } else {
                JOptionPane.showMessageDialog(loginFrame, "❌ Invalid Credentials!", "Login Failed", JOptionPane.ERROR_MESSAGE);
            }
        });
        loginFrame.setLocationRelativeTo(null);
        loginFrame.setVisible(true);
    }
    public static void showDashboard() {
        JFrame frame = new JFrame("CivicTrack - Dashboard");
        frame.setSize(800, 600);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());
        JLabel title = new JLabel("Welcome to CivicTrack", SwingConstants.CENTER);
        title.setFont(new Font("Arial", Font.BOLD, 26));
        title.setBorder(BorderFactory.createEmptyBorder(20, 0, 20, 0));
        frame.add(title, BorderLayout.NORTH);
        JButton logoutBtn = new JButton("Logout");
        logoutBtn.addActionListener(e -> {
            frame.dispose();
            showLoginForm();
        });
        frame.add(logoutBtn, BorderLayout.SOUTH);
        JTabbedPane tabs = new JTabbedPane();
        JPanel reportPanel = new JPanel(new GridLayout(8, 2, 10, 10));
        reportPanel.setBorder(BorderFactory.createEmptyBorder(20, 50, 20, 50));
        JTextField titleField = new JTextField();
        JTextArea descArea = new JTextArea(3, 20);
        JComboBox<String> categoryBox = new JComboBox<>(new String[]{
            "Roads", "Lighting", "Water Supply",
            "Cleanliness", "Public Safety", "Obstructions"
        });
        JCheckBox anonymousBox = new JCheckBox("Anonymous");
        reportPanel.add(new JLabel("Title:"));
        reportPanel.add(titleField);
        reportPanel.add(new JLabel("Short Description:"));
        reportPanel.add(new JScrollPane(descArea));
        reportPanel.add(new JLabel("Category:"));
        reportPanel.add(categoryBox);
        reportPanel.add(new JLabel("Upload Photos (max 3):"));
        JPanel uploadPanel = new JPanel(new BorderLayout());
        JButton uploadBtn = new JButton("Upload");
        photoLabel = new JLabel("No files selected");
        uploadBtn.addActionListener(e -> choosePhotos(frame));
        uploadPanel.add(uploadBtn, BorderLayout.WEST);
        uploadPanel.add(photoLabel, BorderLayout.CENTER);
        reportPanel.add(uploadPanel);
        reportPanel.add(new JLabel("Report as:"));
        reportPanel.add(anonymousBox);
        reportPanel.add(new JLabel());
        JButton submitBtn = new JButton("Submit Issue");
        submitBtn.addActionListener(e -> {
            JOptionPane.showMessageDialog(frame, "📝 Issue submitted successfully!");
            titleField.setText("");
            descArea.setText("");
            categoryBox.setSelectedIndex(0);
            anonymousBox.setSelected(false);
            photoLabel.setText("No files selected");
            selectedPhotos.clear();
        });
        reportPanel.add(submitBtn);
        tabs.add("Report Issue", reportPanel);
        JPanel mapPanel = new JPanel(new GridLayout(4, 2, 10, 10));
        mapPanel.setBorder(BorderFactory.createEmptyBorder(20, 50, 20, 50));
        mapPanel.add(new JLabel("Status:"));
        mapPanel.add(new JComboBox<>(new String[]{"All", "Reported", "In Progress", "Resolved"}));
        mapPanel.add(new JLabel("Category:"));
        mapPanel.add(new JComboBox<>(new String[]{
            "Roads", "Lighting", "Water Supply", "Cleanliness", "Public Safety", "Obstructions"
        }));
        mapPanel.add(new JLabel("Distance:"));
        mapPanel.add(new JComboBox<>(new String[]{"1 km", "3 km", "5 km"}));
        mapPanel.add(new JLabel());
        mapPanel.add(new JButton("View Map"));
        tabs.add("Map & Filter", mapPanel);
        JPanel statusPanel = new JPanel(new BorderLayout());
        statusPanel.add(new JScrollPane(new JTextArea("Status logs will be shown here...")), BorderLayout.CENTER);
        tabs.add("Status Tracking", statusPanel);
        JPanel adminPanel = new JPanel(new GridLayout(4, 1, 10, 10));
        adminPanel.setBorder(BorderFactory.createEmptyBorder(20, 50, 20, 50));
        adminPanel.add(new JButton("Review Flagged Reports"));
        adminPanel.add(new JButton("View Analytics"));
        adminPanel.add(new JButton("Ban User"));
        tabs.add("Admin Panel", adminPanel);
        frame.add(tabs, BorderLayout.CENTER);
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }
    private static void choosePhotos(JFrame parentFrame) {
        JFileChooser chooser = new JFileChooser();
        chooser.setDialogTitle("Select up to 3 images");
        chooser.setMultiSelectionEnabled(true);
        chooser.setFileSelectionMode(JFileChooser.FILES_ONLY);
        chooser.setFileFilter(new javax.swing.filechooser.FileNameExtensionFilter("Image files", "jpg", "jpeg", "png"));
        int result = chooser.showOpenDialog(parentFrame);
        if (result == JFileChooser.APPROVE_OPTION) {
            File[] files = chooser.getSelectedFiles();
            if (files.length > 3) {
                JOptionPane.showMessageDialog(parentFrame, "Please select only up to 3 photos.");
                return;
            }
            selectedPhotos.clear();
            StringBuilder fileNames = new StringBuilder("<html>");
            for (File file : files) {
                selectedPhotos.add(file);
                fileNames.append(file.getName()).append("<br>");
            }
            fileNames.append("</html>");
            photoLabel.setText(fileNames.toString());
        }
    }
}
