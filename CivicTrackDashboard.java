public class CivicTrackDashboard {
    public static void showDashboard() {
        JFrame frame = new JFrame("CivicTrack - Dashboard");
        frame.setSize(800, 600);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());
        JLabel title = new JLabel("Welcome to CivicTrack", SwingConstants.CENTER);
        title.setFont(new Font("Arial", Font.BOLD, 26));
        title.setBorder(BorderFactory.createEmptyBorder(20, 0, 20, 0));
        frame.add(title, BorderLayout.NORTH);
        JTabbedPane tabs = new JTabbedPane();
        JPanel reportPanel = new JPanel(new GridLayout(7, 2, 10, 10));
        reportPanel.setBorder(BorderFactory.createEmptyBorder(20, 50, 20, 50));
        reportPanel.add(new JLabel("Title:"));
        reportPanel.add(new JTextField());
        reportPanel.add(new JLabel("Short Description:"));
        reportPanel.add(new JScrollPane(new JTextArea(3, 20)));
        reportPanel.add(new JLabel("Category:"));
        reportPanel.add(new JComboBox<>(new String[]{
            "Roads", "Lighting", "Water Supply",
            "Cleanliness", "Public Safety", "Obstructions"
        }));
        reportPanel.add(new JLabel("Upload Photos (max 3):"));
        reportPanel.add(new JButton("Upload"));
        reportPanel.add(new JLabel("Report as:"));
        reportPanel.add(new JCheckBox("Anonymous"));
        reportPanel.add(new JLabel());
        reportPanel.add(new JButton("Submit Issue"));
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
}
