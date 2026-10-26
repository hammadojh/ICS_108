import javafx.event.*;
import javafx.scene.control.*;
import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.layout.GridPane;
import javafx.geometry.Insets;
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
    // P1-C2: Handle each button action.
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
    // P1-C1: Read current text.
    String text = input.getText();
    // P1-C3: Parse the seat count.
    int seats = Integer.parseInt(text);
    output.setText(Integer.toString(seats * 10));
  }
  public static void main(String[] args) { launch(args); }
}
