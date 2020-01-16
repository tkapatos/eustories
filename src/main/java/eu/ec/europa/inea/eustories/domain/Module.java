package eu.ec.europa.inea.eustories.domain;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString(of = {"code"})
@EqualsAndHashCode(of = {"code"})
public class Module {
    private String code;
    private String name;
    private int numOfStories;

}
