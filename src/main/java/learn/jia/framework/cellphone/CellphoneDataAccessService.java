package learn.jia.framework.cellphone;

import java.util.List;
import java.util.UUID;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CellphoneDataAccessService {


  private final JdbcTemplate jdbcTemplate;

  public CellphoneDataAccessService(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  public List<Cellphone> selectAllCellphones(){
    String sql = "" + 
                  "SELECT "+
                  " cellphone_id,"+
                  " modal, "+
                  " price, "+
                  " RAM, "+
                  " ROM " +
                  "FROM cellphone";

    RowMapper<Cellphone> mapper = (resultSet,i) -> {
      String cellphoneIdStr = resultSet.getString("cellphone_id");
      UUID cellphone_id = UUID.fromString(cellphoneIdStr);
      String modal =resultSet.getString("modal");
      Integer price =resultSet.getInt("price");
      String RAM =resultSet.getString("RAM");
      String ROM =resultSet.getString("ROM");
      return new Cellphone(cellphone_id,modal,price,RAM,ROM);
    };

    return jdbcTemplate.query(sql,mapper);
    
  }

  int insertCellphone(UUID newphoneId, Cellphone cellphone) {
    String sql = "" + 
                  "INSERT INTO cellphone (cellphone_id,modal,price,RAM,ROM)"+
                  " VALUES(?,?,?,?,?),";


    return jdbcTemplate.update(sql,
            newphoneId,
            cellphone.getModal(),
            cellphone.getPrice(),
            cellphone.getRAM(),
            cellphone.getROM());
  }
}
