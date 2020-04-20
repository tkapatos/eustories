package eu.ec.europa.inea.eustories.domain;

import lombok.*;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode(of = {"given","when","then"})
public class Criterion {
    @Min(value = 1L)
    private Integer index;
    @NotNull
    @NotEmpty
    private String given;
    @NotNull
    @NotEmpty
    private String when;
    @NotNull
    @NotEmpty
    private String then;
}
