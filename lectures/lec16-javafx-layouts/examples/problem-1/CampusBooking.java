import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.control.TextField;
import javafx.scene.layout.Pane;

// P1-C1: JavaFX calls start after launch.
public class CampusBooking extends Application {
  @Override
  public void start(Stage stage) {
    // P1-C5: Display a non-editable line.
    TextField summary = new TextField("3 seats: 30 SAR");
    summary.setEditable(false);
    summary.setPrefColumnCount(18);
    // P1-C4: Attach the field to its container.
    Pane pane = new Pane();
    pane.getChildren().add(summary);
    // P1-C3: A scene holds the pane.
    stage.setScene(new Scene(pane));
    // P1-C2: Title and show the window.
    stage.setTitle("Campus booking");
    stage.show();
  }
  public static void main(String[] args) {
    launch(args);
  }
}
