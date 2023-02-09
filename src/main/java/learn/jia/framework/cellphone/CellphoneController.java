package learn.jia.framework.cellphone;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("cellphone")
public class CellphoneController {


  private final CellphoneService cellphoneservice;

  @Autowired
  public CellphoneController(CellphoneService cellphoneservice) {
    this.cellphoneservice = cellphoneservice;
  }

  @GetMapping
  public List<Cellphone> getAllCellphones(){
    return cellphoneservice.getAllCellphones();
  }

  @PostMapping
  public void addNewCellphone(@RequestBody Cellphone cellphone) {
    cellphoneservice.addNewCellphone(cellphone);
  }
}
