package eu.ec.europa.inea.eustories.domain;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode(of = {"given","when","then"})
public class Criterion {
    private String given;
    private String when;
    private String then;
}
