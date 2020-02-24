package eu.ec.europa.inea.eustories.domain;

import eu.ec.europa.inea.eustories.util.Constants;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode(of = {"summary"})
@Document(collection = "stories")
public class Story {
    private String id;
    private String summary;
    private String description;
    private String jiraId;
    private int points;
    private Constants.Status status;
    @DBRef
    private Initiative initiative;
    @DBRef
    private Epic epic;
    private List<Criterion> criteria;
}
