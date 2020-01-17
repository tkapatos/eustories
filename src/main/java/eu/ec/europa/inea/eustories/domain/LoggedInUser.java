package eu.ec.europa.inea.eustories.domain;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode(of = {"username"})
public class LoggedInUser {
    private String username;
}
