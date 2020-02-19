package eu.ec.europa.inea.eustories.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(of = {"code"})
@EqualsAndHashCode(of = {"code"})
@Document(collection = "initiatives")
public class Initiative {
    private String id;
    @Indexed
    private String code;
    private String description;
}
