/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLines = `subscription OnCreateLines($id: ID, $X: Float, $Y: Float) {
  onCreateLines(id: $id, X: $X, Y: $Y) {
    id
    X
    Y
  }
}
`;
export const onUpdateLines = `subscription OnUpdateLines($id: ID, $X: Float, $Y: Float) {
  onUpdateLines(id: $id, X: $X, Y: $Y) {
    id
    X
    Y
  }
}
`;
export const onDeleteLines = `subscription OnDeleteLines($id: ID, $X: Float, $Y: Float) {
  onDeleteLines(id: $id, X: $X, Y: $Y) {
    id
    X
    Y
  }
}
`;
export const onCreateWazeAlert = `subscription OnCreateWazeAlert(
  $id: ID
  $BlockingAlertUUID: String
  $Country: String
  $Delay: Int
  $EndNode: String
) {
  onCreateWazeAlert(
    id: $id
    BlockingAlertUUID: $BlockingAlertUUID
    Country: $Country
    Delay: $Delay
    EndNode: $EndNode
  ) {
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
export const onUpdateWazeAlert = `subscription OnUpdateWazeAlert(
  $id: ID
  $BlockingAlertUUID: String
  $Country: String
  $Delay: Int
  $EndNode: String
) {
  onUpdateWazeAlert(
    id: $id
    BlockingAlertUUID: $BlockingAlertUUID
    Country: $Country
    Delay: $Delay
    EndNode: $EndNode
  ) {
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
export const onDeleteWazeAlert = `subscription OnDeleteWazeAlert(
  $id: ID
  $BlockingAlertUUID: String
  $Country: String
  $Delay: Int
  $EndNode: String
) {
  onDeleteWazeAlert(
    id: $id
    BlockingAlertUUID: $BlockingAlertUUID
    Country: $Country
    Delay: $Delay
    EndNode: $EndNode
  ) {
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
export const onCreateWazeIrregularity = `subscription OnCreateWazeIrregularity(
  $id: ID
  $AlertsCount: Int
  $CauseType: String
  $Country: String
  $DelaySeconds: Int
) {
  onCreateWazeIrregularity(
    id: $id
    AlertsCount: $AlertsCount
    CauseType: $CauseType
    Country: $Country
    DelaySeconds: $DelaySeconds
  ) {
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
export const onUpdateWazeIrregularity = `subscription OnUpdateWazeIrregularity(
  $id: ID
  $AlertsCount: Int
  $CauseType: String
  $Country: String
  $DelaySeconds: Int
) {
  onUpdateWazeIrregularity(
    id: $id
    AlertsCount: $AlertsCount
    CauseType: $CauseType
    Country: $Country
    DelaySeconds: $DelaySeconds
  ) {
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
export const onDeleteWazeIrregularity = `subscription OnDeleteWazeIrregularity(
  $id: ID
  $AlertsCount: Int
  $CauseType: String
  $Country: String
  $DelaySeconds: Int
) {
  onDeleteWazeIrregularity(
    id: $id
    AlertsCount: $AlertsCount
    CauseType: $CauseType
    Country: $Country
    DelaySeconds: $DelaySeconds
  ) {
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
export const onCreateWazeJam = `subscription OnCreateWazeJam(
  $id: ID
  $BlockingAlertUUID: String
  $City: String
  $Country: String
  $Delay: Int
) {
  onCreateWazeJam(
    id: $id
    BlockingAlertUUID: $BlockingAlertUUID
    City: $City
    Country: $Country
    Delay: $Delay
  ) {
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
export const onUpdateWazeJam = `subscription OnUpdateWazeJam(
  $id: ID
  $BlockingAlertUUID: String
  $City: String
  $Country: String
  $Delay: Int
) {
  onUpdateWazeJam(
    id: $id
    BlockingAlertUUID: $BlockingAlertUUID
    City: $City
    Country: $Country
    Delay: $Delay
  ) {
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
export const onDeleteWazeJam = `subscription OnDeleteWazeJam(
  $id: ID
  $BlockingAlertUUID: String
  $City: String
  $Country: String
  $Delay: Int
) {
  onDeleteWazeJam(
    id: $id
    BlockingAlertUUID: $BlockingAlertUUID
    City: $City
    Country: $Country
    Delay: $Delay
  ) {
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
export const onCreateTfwmHighwaysHeDapi = `subscription OnCreateTfwmHighwaysHeDapi(
  $_uuid: ID
  $county: String
  $disrupted: Int
  $endDate: AWSDateTime
  $guid: String
) {
  onCreateTfwm_highways_he_dapi(
    _uuid: $_uuid
    county: $county
    disrupted: $disrupted
    endDate: $endDate
    guid: $guid
  ) {
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
export const onUpdateTfwmHighwaysHeDapi = `subscription OnUpdateTfwmHighwaysHeDapi(
  $_uuid: ID
  $county: String
  $disrupted: Int
  $endDate: AWSDateTime
  $guid: String
) {
  onUpdateTfwm_highways_he_dapi(
    _uuid: $_uuid
    county: $county
    disrupted: $disrupted
    endDate: $endDate
    guid: $guid
  ) {
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
export const onDeleteTfwmHighwaysHeDapi = `subscription OnDeleteTfwmHighwaysHeDapi(
  $_uuid: ID
  $county: String
  $disrupted: Int
  $endDate: AWSDateTime
  $guid: String
) {
  onDeleteTfwm_highways_he_dapi(
    _uuid: $_uuid
    county: $county
    disrupted: $disrupted
    endDate: $endDate
    guid: $guid
  ) {
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
export const onCreateTfwmMetroDapi = `subscription OnCreateTfwmMetroDapi(
  $id: ID
  $createdAt: AWSDateTime
  $disrupted: Int
  $metroDapiAltmode: String
  $metroDapiMoreinfo: String
) {
  onCreateTfwm_metro_dapi(
    id: $id
    createdAt: $createdAt
    disrupted: $disrupted
    metroDapiAltmode: $metroDapiAltmode
    metroDapiMoreinfo: $metroDapiMoreinfo
  ) {
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
export const onUpdateTfwmMetroDapi = `subscription OnUpdateTfwmMetroDapi(
  $id: ID
  $createdAt: AWSDateTime
  $disrupted: Int
  $metroDapiAltmode: String
  $metroDapiMoreinfo: String
) {
  onUpdateTfwm_metro_dapi(
    id: $id
    createdAt: $createdAt
    disrupted: $disrupted
    metroDapiAltmode: $metroDapiAltmode
    metroDapiMoreinfo: $metroDapiMoreinfo
  ) {
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
export const onDeleteTfwmMetroDapi = `subscription OnDeleteTfwmMetroDapi(
  $id: ID
  $createdAt: AWSDateTime
  $disrupted: Int
  $metroDapiAltmode: String
  $metroDapiMoreinfo: String
) {
  onDeleteTfwm_metro_dapi(
    id: $id
    createdAt: $createdAt
    disrupted: $disrupted
    metroDapiAltmode: $metroDapiAltmode
    metroDapiMoreinfo: $metroDapiMoreinfo
  ) {
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
export const onCreateTfwmRailLocallinesDapi = `subscription OnCreateTfwmRailLocallinesDapi(
  $id: Int
  $line_name: String
  $lower_lin: String
  $name: String
  $spatial: String
) {
  onCreateTfwm_rail_locallines_dapi(
    id: $id
    line_name: $line_name
    lower_lin: $lower_lin
    name: $name
    spatial: $spatial
  ) {
    id
    line_name
    lower_lin
    name
    spatial
  }
}
`;
export const onUpdateTfwmRailLocallinesDapi = `subscription OnUpdateTfwmRailLocallinesDapi(
  $id: Int
  $line_name: String
  $lower_lin: String
  $name: String
  $spatial: String
) {
  onUpdateTfwm_rail_locallines_dapi(
    id: $id
    line_name: $line_name
    lower_lin: $lower_lin
    name: $name
    spatial: $spatial
  ) {
    id
    line_name
    lower_lin
    name
    spatial
  }
}
`;
export const onDeleteTfwmRailLocallinesDapi = `subscription OnDeleteTfwmRailLocallinesDapi(
  $id: Int
  $line_name: String
  $lower_lin: String
  $name: String
  $spatial: String
) {
  onDeleteTfwm_rail_locallines_dapi(
    id: $id
    line_name: $line_name
    lower_lin: $lower_lin
    name: $name
    spatial: $spatial
  ) {
    id
    line_name
    lower_lin
    name
    spatial
  }
}
`;
export const onCreateTfwmRailNrailDapi = `subscription OnCreateTfwmRailNrailDapi(
  $id: ID
  $activeStatus: String
  $changedby: String
  $clearedincident: String
  $creationtime: String
) {
  onCreateTfwm_rail_nrail_dapi(
    id: $id
    activeStatus: $activeStatus
    changedby: $changedby
    clearedincident: $clearedincident
    creationtime: $creationtime
  ) {
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
export const onUpdateTfwmRailNrailDapi = `subscription OnUpdateTfwmRailNrailDapi(
  $id: ID
  $activeStatus: String
  $changedby: String
  $clearedincident: String
  $creationtime: String
) {
  onUpdateTfwm_rail_nrail_dapi(
    id: $id
    activeStatus: $activeStatus
    changedby: $changedby
    clearedincident: $clearedincident
    creationtime: $creationtime
  ) {
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
export const onDeleteTfwmRailNrailDapi = `subscription OnDeleteTfwmRailNrailDapi(
  $id: ID
  $activeStatus: String
  $changedby: String
  $clearedincident: String
  $creationtime: String
) {
  onDeleteTfwm_rail_nrail_dapi(
    id: $id
    activeStatus: $activeStatus
    changedby: $changedby
    clearedincident: $clearedincident
    creationtime: $creationtime
  ) {
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
