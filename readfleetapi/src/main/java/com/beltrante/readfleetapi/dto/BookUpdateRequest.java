package com.beltrante.readfleetapi.dto;

import com.beltrante.readfleetapi.model.ReadStatus;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

@Data
public class BookUpdateRequest {

    @NotNull(message = "Pages read cannot be null")
    @PositiveOrZero(message = "Pages read must be 0 or positive")
    private Integer pagesRead;

    @NotNull(message = "Status cannot be null")
    private ReadStatus status;

    @Min(value = 1, message = "Rating must be at least 1")
    @Max(value = 5, message = "Rating cannot exceed 5")
    private Integer rating;
}
