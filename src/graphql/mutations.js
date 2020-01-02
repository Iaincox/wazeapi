/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLines = `mutation CreateLines($input: CreateLinesInput!) {
  createLines(input: $input) {
    id
    X
    Y
  }
}
`;
export const updateLines = `mutation UpdateLines($input: UpdateLinesInput!) {
  updateLines(input: $input) {
    id
    X
    Y
  }
}
`;
export const deleteLines = `mutation DeleteLines($input: DeleteLinesInput!) {
  deleteLines(input: $input) {
    id
    X
    Y
  }
}
`;
export const createWazeAlert = `mutation CreateWazeAlert($input: CreateWazeAlertInput!) {
  createWazeAlert(input: $input) {
    id
    BlockingAlertUUID
    Country
    Delay
    EndNode
    Length
    Level
    Line {
      id
      X
      Y
    }
    PubMillis
    RoadType
    Speed
    StartNode
    Street
    TurnType
    Type
    UUID
  }
}
`;
export const updateWazeAlert = `mutation UpdateWazeAlert($input: UpdateWazeAlertInput!) {
  updateWazeAlert(input: $input) {
    id
    BlockingAlertUUID
    Country
    Delay
    EndNode
    Length
    Level
    Line {
      id
      X
      Y
    }
    PubMillis
    RoadType
    Speed
    StartNode
    Street
    TurnType
    Type
    UUID
  }
}
`;
export const deleteWazeAlert = `mutation DeleteWazeAlert($input: DeleteWazeAlertInput!) {
  deleteWazeAlert(input: $input) {
    id
    BlockingAlertUUID
    Country
    Delay
    EndNode
    Length
    Level
    Line {
      id
      X
      Y
    }
    PubMillis
    RoadType
    Speed
    StartNode
    Street
    TurnType
    Type
    UUID
  }
}
`;
export const createWazeIrregularity = `mutation CreateWazeIrregularity($input: CreateWazeIrregularityInput!) {
  createWazeIrregularity(input: $input) {
    id
    AlertsCount
    Alerts {
      id
      BlockingAlertUUID
      Country
      Delay
      EndNode
      Length
      Level
      PubMillis
      RoadType
      Speed
      StartNode
      Street
      TurnType
      Type
      UUID
    }
    CauseType
    Country
    DelaySeconds
    DetectionDate
    DetectionDateMillis
    DriversCount
    EndNode
    Highway
    IDx
    JamLevel
    Length
    Line {
      id
      X
      Y
    }
    NComments
    NImages
    NThumbsUp
    RegularSpeed
    Seconds
    Severity
    Speed
    StartNode
    Street
    Trend
    Type
    UpdateDate
    UpdateDateMillis
  }
}
`;
export const updateWazeIrregularity = `mutation UpdateWazeIrregularity($input: UpdateWazeIrregularityInput!) {
  updateWazeIrregularity(input: $input) {
    id
    AlertsCount
    Alerts {
      id
      BlockingAlertUUID
      Country
      Delay
      EndNode
      Length
      Level
      PubMillis
      RoadType
      Speed
      StartNode
      Street
      TurnType
      Type
      UUID
    }
    CauseType
    Country
    DelaySeconds
    DetectionDate
    DetectionDateMillis
    DriversCount
    EndNode
    Highway
    IDx
    JamLevel
    Length
    Line {
      id
      X
      Y
    }
    NComments
    NImages
    NThumbsUp
    RegularSpeed
    Seconds
    Severity
    Speed
    StartNode
    Street
    Trend
    Type
    UpdateDate
    UpdateDateMillis
  }
}
`;
export const deleteWazeIrregularity = `mutation DeleteWazeIrregularity($input: DeleteWazeIrregularityInput!) {
  deleteWazeIrregularity(input: $input) {
    id
    AlertsCount
    Alerts {
      id
      BlockingAlertUUID
      Country
      Delay
      EndNode
      Length
      Level
      PubMillis
      RoadType
      Speed
      StartNode
      Street
      TurnType
      Type
      UUID
    }
    CauseType
    Country
    DelaySeconds
    DetectionDate
    DetectionDateMillis
    DriversCount
    EndNode
    Highway
    IDx
    JamLevel
    Length
    Line {
      id
      X
      Y
    }
    NComments
    NImages
    NThumbsUp
    RegularSpeed
    Seconds
    Severity
    Speed
    StartNode
    Street
    Trend
    Type
    UpdateDate
    UpdateDateMillis
  }
}
`;
export const createWazeJam = `mutation CreateWazeJam($input: CreateWazeJamInput!) {
  createWazeJam(input: $input) {
    id
    BlockingAlertUUID
    City
    Country
    Delay
    EndNode
    Length
    Level
    PubMillis
    RoadType
    Speed
    Street
    TurnType
    Type
    UUID
  }
}
`;
export const updateWazeJam = `mutation UpdateWazeJam($input: UpdateWazeJamInput!) {
  updateWazeJam(input: $input) {
    id
    BlockingAlertUUID
    City
    Country
    Delay
    EndNode
    Length
    Level
    PubMillis
    RoadType
    Speed
    Street
    TurnType
    Type
    UUID
  }
}
`;
export const deleteWazeJam = `mutation DeleteWazeJam($input: DeleteWazeJamInput!) {
  deleteWazeJam(input: $input) {
    id
    BlockingAlertUUID
    City
    Country
    Delay
    EndNode
    Length
    Level
    PubMillis
    RoadType
    Speed
    Street
    TurnType
    Type
    UUID
  }
}
`;
export const createTfwmHighwaysHeDapi = `mutation CreateTfwmHighwaysHeDapi($input: CreateTfwm_highways_he_dapiInput!) {
  createTfwm_highways_he_dapi(input: $input) {
    _uuid
    county
    disrupted
    endDate
    guid
    krn
    krnRoute
    la
    latitude
    longitude
    reference
    road
    source
    spacial
    startDate
    title
    url
  }
}
`;
export const updateTfwmHighwaysHeDapi = `mutation UpdateTfwmHighwaysHeDapi($input: UpdateTfwm_highways_he_dapiInput!) {
  updateTfwm_highways_he_dapi(input: $input) {
    _uuid
    county
    disrupted
    endDate
    guid
    krn
    krnRoute
    la
    latitude
    longitude
    reference
    road
    source
    spacial
    startDate
    title
    url
  }
}
`;
export const deleteTfwmHighwaysHeDapi = `mutation DeleteTfwmHighwaysHeDapi($input: DeleteTfwm_highways_he_dapiInput!) {
  deleteTfwm_highways_he_dapi(input: $input) {
    _uuid
    county
    disrupted
    endDate
    guid
    krn
    krnRoute
    la
    latitude
    longitude
    reference
    road
    source
    spacial
    startDate
    title
    url
  }
}
`;
export const createTfwmMetroDapi = `mutation CreateTfwmMetroDapi($input: CreateTfwm_metro_dapiInput!) {
  createTfwm_metro_dapi(input: $input) {
    id
    createdAt
    disrupted
    metroDapiAltmode
    metroDapiMoreinfo
    metroDapiReason
    metroDapiTimedelay
    projectName
    severity
    spatial
    stationName
    tfwmId
    towards
    tweetId
    updatedAt
    xcoord
    ycoord
  }
}
`;
export const updateTfwmMetroDapi = `mutation UpdateTfwmMetroDapi($input: UpdateTfwm_metro_dapiInput!) {
  updateTfwm_metro_dapi(input: $input) {
    id
    createdAt
    disrupted
    metroDapiAltmode
    metroDapiMoreinfo
    metroDapiReason
    metroDapiTimedelay
    projectName
    severity
    spatial
    stationName
    tfwmId
    towards
    tweetId
    updatedAt
    xcoord
    ycoord
  }
}
`;
export const deleteTfwmMetroDapi = `mutation DeleteTfwmMetroDapi($input: DeleteTfwm_metro_dapiInput!) {
  deleteTfwm_metro_dapi(input: $input) {
    id
    createdAt
    disrupted
    metroDapiAltmode
    metroDapiMoreinfo
    metroDapiReason
    metroDapiTimedelay
    projectName
    severity
    spatial
    stationName
    tfwmId
    towards
    tweetId
    updatedAt
    xcoord
    ycoord
  }
}
`;
export const createTfwmRailLocallinesDapi = `mutation CreateTfwmRailLocallinesDapi(
  $input: CreateTfwm_rail_locallines_dapiInput!
) {
  createTfwm_rail_locallines_dapi(input: $input) {
    id
    line_name
    lower_lin
    name
    spatial
  }
}
`;
export const updateTfwmRailLocallinesDapi = `mutation UpdateTfwmRailLocallinesDapi(
  $input: UpdateTfwm_rail_locallines_dapiInput!
) {
  updateTfwm_rail_locallines_dapi(input: $input) {
    id
    line_name
    lower_lin
    name
    spatial
  }
}
`;
export const deleteTfwmRailLocallinesDapi = `mutation DeleteTfwmRailLocallinesDapi(
  $input: DeleteTfwm_rail_locallines_dapiInput!
) {
  deleteTfwm_rail_locallines_dapi(input: $input) {
    id
    line_name
    lower_lin
    name
    spatial
  }
}
`;
export const createTfwmRailNrailDapi = `mutation CreateTfwmRailNrailDapi($input: CreateTfwm_rail_nrail_dapiInput!) {
  createTfwm_rail_nrail_dapi(input: $input) {
    id
    activeStatus
    changedby
    clearedincident
    creationtime
    description
    disrupted
    incidentnumber
    incidentpriority
    label
    lastchangeddate
    operatorname
    operatorref
    participantref
    planned
    reference
    routesaffected
    spatial
    summary
    twitterhashtag
    uri
    validityperiodEndtime
    validityperiodStarttime
  }
}
`;
export const updateTfwmRailNrailDapi = `mutation UpdateTfwmRailNrailDapi($input: UpdateTfwm_rail_nrail_dapiInput!) {
  updateTfwm_rail_nrail_dapi(input: $input) {
    id
    activeStatus
    changedby
    clearedincident
    creationtime
    description
    disrupted
    incidentnumber
    incidentpriority
    label
    lastchangeddate
    operatorname
    operatorref
    participantref
    planned
    reference
    routesaffected
    spatial
    summary
    twitterhashtag
    uri
    validityperiodEndtime
    validityperiodStarttime
  }
}
`;
export const deleteTfwmRailNrailDapi = `mutation DeleteTfwmRailNrailDapi($input: DeleteTfwm_rail_nrail_dapiInput!) {
  deleteTfwm_rail_nrail_dapi(input: $input) {
    id
    activeStatus
    changedby
    clearedincident
    creationtime
    description
    disrupted
    incidentnumber
    incidentpriority
    label
    lastchangeddate
    operatorname
    operatorref
    participantref
    planned
    reference
    routesaffected
    spatial
    summary
    twitterhashtag
    uri
    validityperiodEndtime
    validityperiodStarttime
  }
}
`;
