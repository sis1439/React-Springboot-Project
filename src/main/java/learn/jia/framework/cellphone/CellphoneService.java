package learn.jia.framework.cellphone;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

@Service
public class CellphoneService {
  
  private final CellphoneDataAccessService cellphoneDataAccessService;

  public CellphoneService(CellphoneDataAccessService cellphoneDataAccessService) {
    this.cellphoneDataAccessService = cellphoneDataAccessService;
  }

  public List<Cellphone> getAllCellphones(){
    return cellphoneDataAccessService.selectAllCellphones();
  }

  public void addNewCellphone(Cellphone cellphone) {
    addNewCellphone(null,cellphone);
  }

  public void addNewCellphone(UUID cellphoneId, Cellphone cellphone) {
    UUID newphoneId = Optional.ofNullable(cellphoneId).orElse(UUID.randomUUID());

    // TODO: Verify that modal is not taken
    cellphoneDataAccessService.insertCellphone(newphoneId, cellphone);
  }
  
}
