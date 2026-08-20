package com.beltrante.readfleetapi.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum ReadStatus {
    @JsonProperty("reading")
    READING,

    @JsonProperty("completed")
    COMPLETED,

    @JsonProperty("want-to-read")
    WANT_TO_READ
}