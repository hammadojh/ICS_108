import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.control.TextField;
import javafx.scene.control.Label;
import javafx.scene.layout.GridPane;
import javafx.geometry.Insets;

public class CampusBooking extends Application {
  @Override
  public void start(Stage stage) {
    int seats = 3;
    int price = 10;
    TextField seatsField = new TextField(Integer.toString(seats));
    TextField totalField = new TextField(Integer.toString(seats * price));
    TextField priceField = new TextField(Integer.toString(price));
    seatsField.setEditable(false);
    totalField.setEditable(false);
    priceField.setEditable(false);
    GridPane grid = new GridPane();
    grid.add(new Label("Seats:"), 0, 0);
    grid.add(seatsField, 1, 0);
    grid.add(new Label("Total (SAR):"), 0, 1);
    grid.add(totalField, 1, 1);
    grid.add(new Label("Price per seat (SAR):"), 0, 2);
    grid.add(priceField, 1, 2);
    // P3-C1: Keep content away from the edges.
    grid.setPadding(new Insets(16));
    // P3-C2: Separate columns and rows.
    grid.setHgap(12);
    grid.setVgap(8);
    stage.setScene(new Scene(grid));
    stage.setTitle("Campus booking");
    stage.show();
  }
  public static void main(String[] args) {
    launch(args);
  }
}
