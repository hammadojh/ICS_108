import javafx.event.*;
import javafx.scene.control.*;
import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.layout.GridPane;
import javafx.geometry.Insets;
import javafx.scene.control.Alert.AlertType;
public class CampusBooking extends Application {
  private TextField input = new TextField("3");
  private TextField output = new TextField("30");
  @Override
  public void start(Stage stage) {
    TextField price = new TextField("10");
    output.setEditable(false);
    price.setEditable(false);
    GridPane grid = new GridPane();
    grid.setPadding(new Insets(16));
    grid.setHgap(12);
    grid.setVgap(8);
    grid.add(new Label("Seats:"), 0, 0);
    grid.add(input, 1, 0);
    grid.add(new Label("Total (SAR):"), 0, 1);
    grid.add(output, 1, 1);
    grid.add(new Label("Price per seat (SAR):"), 0, 2);
    grid.add(price, 1, 2);
    Button calc = new Button("Calculate");
    grid.add(calc, 1, 3);
    calc.setOnAction(new EventHandler<ActionEvent>() {
      @Override public void handle(ActionEvent event) {
        updateTotal();
      }
    });
    stage.setScene(new Scene(grid));
    stage.setTitle("Campus booking");
    stage.show();
  }
  private void updateTotal() {
    output.clear();
    try {
      // P2-C1: Parse, then check 1 to 4.
      int seats = Integer.parseInt(input.getText().trim());
      if (seats < 1 || seats > 4) {
        showError("Choose 1 to 4 seats.");
        return;
      }
      output.setText(Integer.toString(seats * 10));
    } catch (NumberFormatException e) {
      // P2-C3: Allow a later retry.
      showError("Enter a whole number.");
    }
  }
  private void showError(String message) {
    // P2-C2: Show error feedback.
    Alert alert = new Alert(AlertType.ERROR, message);
    alert.setTitle("Invalid booking");
    alert.setHeaderText(null);
    alert.showAndWait();
  }
  public static void main(String[] args) { launch(args); }
}
