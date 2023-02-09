package learn.jia.framework.cellphone;

import lombok.Getter;
import lombok.Setter;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

@Getter
@Setter
public class Cellphone {

  private final UUID cellphoneId;
  private final Integer price;
  private final String modal;
  private final String RAM;
  private final String ROM;
 
  public Cellphone(@JsonProperty("cellphoneId") UUID cellphoneId,
                    @JsonProperty("modal") String modal, 
                    @JsonProperty("price") Integer price, 
                    @JsonProperty("RAM") String RAM, 
                    @JsonProperty("ROM") String ROM){
    this.cellphoneId = cellphoneId;
    this.price = price;
    this.modal = modal;
    this.RAM = RAM;
    this.ROM = ROM;
  }
  @Override
  public String toString() {
    // TODO Auto-generated method stub
    return "Cellphone{" +
            "cellphoneId=" + cellphoneId +
            ", price=" + price + '\'' +
            ", modal=" + modal + '\'' +
            ", RAM=" + RAM + '\'' +
            ", ROM=" + ROM + '\'' + '}';
  }
}
