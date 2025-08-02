package database;
import javax.swing.*;
import java.awt.*;
import java.io.File;
import java.sql.*;
import java.util.ArrayList;
public class database {
    public class CivicTrackDashboard {

        private static ArrayList<File> selectedPhotos = new ArrayList<>();
        private static JLabel photoLabel;

        // MySQL connection details — replace with your actual MySQL username/password!
        private static final String DB_URL = "jdbc:mysql://localhost:3306/civictrack?useSSL=false&serverTimezone=UTC";
        private static final String DB_USER = "root";
        private static final String DB_PASSWORD = "Krish@!1322";

        public static void main(String[] args) {
            SwingUtilities.invokeLater(CivicTrackDashboard::showDashboard);
        }

        public static Connection getConnection() throws Exception {
            Class.forName("com.mysql.cj.jdbc.Driver");  // Load MySQL driver
            return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
        }

        public static void showDashboard() {
            JFrame frame = new JFrame("CivicTrack - Dashboard");
            frame.setSize(800, 600);
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

            JLabel title = new JLabel("CivicTrack - Submit Report", SwingConstants.CENTER);
            title.setFont(new Font("SansSerif", Font.BOLD, 20));
            title.setBorder(BorderFactory.createEmptyBorder(20, 0, 20, 0));
            frame.add(title, BorderLayout.NORTH);

            JPanel reportPanel = new JPanel(new GridLayout(8, 2, 10, 10));
            reportPanel.setBorder(BorderFactory.createEmptyBorder(20, 50, 20, 50));

            // Input fields
            JTextField titleField = new JTextField();
            JTextField locationField = new JTextField();
            JComboBox<String> categoryCombo = new JComboBox<>(new String[]{
                    "Pothole", "Garbage", "Street Light", "Water Issue", "Cleanliness", "Public Safety", "Obstructions"
            });
            JCheckBox anonymousCheck = new JCheckBox("Anonymous");

            // Upload photos button and label
            JPanel uploadPanel = new JPanel(new BorderLayout());
            JButton uploadBtn = new JButton("Upload");
            photoLabel = new JLabel("No files selected");
            uploadBtn.addActionListener(e -> choosePhotos(frame));
            uploadPanel.add(uploadBtn, BorderLayout.WEST);
            uploadPanel.add(photoLabel, BorderLayout.CENTER);

            // Submit button
            JButton submitBtn = new JButton("Submit");
            submitBtn.addActionListener(e -> {
                String titleText = titleField.getText().trim();
                String locationText = locationField.getText().trim();

                if (titleText.isEmpty() || locationText.isEmpty()) {
                    JOptionPane.showMessageDialog(frame, "Please fill Title and Location.");
                    return;
                }

                try (Connection conn = getConnection()) {
                    String sql = "INSERT INTO civic_reports (title, location, category, anonymous, photo1_path, photo2_path, photo3_path) " +
                            "VALUES (?, ?, ?, ?, ?, ?, ?)";
                    PreparedStatement ps = conn.prepareStatement(sql);
                    ps.setString(1, titleText);
                    ps.setString(2, locationText);
                    ps.setString(3, categoryCombo.getSelectedItem().toString());
                    ps.setBoolean(4, anonymousCheck.isSelected());

                    for (int i = 0; i < 3; i++) {
                        if (i < selectedPhotos.size()) {
                            ps.setString(5 + i, selectedPhotos.get(i).getAbsolutePath());
                        } else {
                            ps.setNull(5 + i, Types.VARCHAR);
                        }
                    }

                    ps.executeUpdate();
                    JOptionPane.showMessageDialog(frame, "Report saved to database!");

                    // Reset form after submit
                    titleField.setText("");
                    locationField.setText("");
                    anonymousCheck.setSelected(false);
                    selectedPhotos.clear();
                    photoLabel.setText("No files selected");

                } catch (Exception ex) {
                    ex.printStackTrace();
                    JOptionPane.showMessageDialog(frame, "Error: " + ex.getMessage());
                }
            });

            // Layout form
            reportPanel.add(new JLabel("Title:"));
            reportPanel.add(titleField);
            reportPanel.add(new JLabel("Location:"));
            reportPanel.add(locationField);
            reportPanel.add(new JLabel("Category:"));
            reportPanel.add(categoryCombo);
            reportPanel.add(new JLabel("Upload Photos (max 3):"));
            reportPanel.add(uploadPanel);
            reportPanel.add(new JLabel("Report as:"));
            reportPanel.add(anonymousCheck);
            reportPanel.add(new JLabel()); // filler
            reportPanel.add(submitBtn);

            frame.add(reportPanel);
            frame.setLocationRelativeTo(null);
            frame.setVisible(true);
        }

        private static void choosePhotos(JFrame parentFrame) {
            JFileChooser chooser = new JFileChooser();
            chooser.setDialogTitle("Select up to 3 images");
            chooser.setMultiSelectionEnabled(true);
            chooser.setFileSelectionMode(JFileChooser.FILES_ONLY);
            int result = chooser.showOpenDialog(parentFrame);
            if (result == JFileChooser.APPROVE_OPTION) {
                File[] files = chooser.getSelectedFiles();
                if (files.length > 3) {
                    JOptionPane.showMessageDialog(parentFrame, "Please select only up to 3 photos.");
                    return;
                }
                selectedPhotos.clear();
                for (File file : files) {
                    selectedPhotos.add(file);
                }
                StringBuilder fileNames = new StringBuilder("<html>");
                for (File file : selectedPhotos) {
                    fileNames.append(file.getName()).append("<br>");
                }
                fileNames.append("</html>");
                photoLabel.setText(fileNames.toString());
            }
        }
    }
    public static void main(String[] args) {
        SwingUtilities.invokeLater(CivicTrackDashboard::showDashboard);
    }
}