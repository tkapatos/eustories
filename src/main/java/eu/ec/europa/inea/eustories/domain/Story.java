package eu.ec.europa.inea.eustories.domain;

import eu.ec.europa.inea.eustories.util.Constants;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode(of = {"jiraId"})
@Document(collection = "stories")
public class Story {
    private String id;
    private String summary;
    private String description;
    @NotNull
    @NotEmpty
    private String jiraId;
    private String explanations;
    private String toBeDiscussed;
    private int points;
    private Constants.Status status;
    @DBRef
    private Initiative initiative;
    @DBRef
    private Epic epic;
    private List<Criterion> criteria;
}
