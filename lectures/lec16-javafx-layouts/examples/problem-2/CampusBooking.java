import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.control.TextField;
import javafx.scene.control.Label;
import javafx.scene.layout.GridPane;

public class CampusBooking extends Application {
  @Override
  public void start(Stage stage) {
    int seats = 3;
    int total = seats * 10;
    TextField seatsField = new TextField();
    TextField totalField = new TextField();
    seatsField.setEditable(false);
    totalField.setEditable(false);
    // P2-C3: Convert values to display text.
    seatsField.setText(Integer.toString(seats));
    totalField.setText(Integer.toString(total));
    // P2-C1: Describe each displayed value.
    Label seatsLabel = new Label("Seats:");
    Label totalLabel = new Label("Total (SAR):");
    // P2-C2: Add controls by column, then row.
    GridPane grid = new GridPane();
    grid.add(seatsLabel, 0, 0);
    grid.add(seatsField, 1, 0);
    grid.add(totalLabel, 0, 1);
    grid.add(totalField, 1, 1);
    stage.setScene(new Scene(grid));
    stage.setTitle("Campus booking");
    stage.show();
  }
  public static void main(String[] args) {
    launch(args);
  }
}
