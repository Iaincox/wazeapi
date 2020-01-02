/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLines = `query GetLines($id: ID!) {
  getLines(id: $id) {
    id
    X
    Y
  }
}
`;
export const listLines = `query ListLines(
  $filter: TableLinesFilterInput
  $limit: Int
  $nextToken: String
) {
  listLines(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      X
      Y
    }
    nextToken
  }
}
`;
export const getWazeAlert = `query GetWazeAlert($id: ID!) {
  getWazeAlert(id: $id) {
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
export const listWazeAlerts = `query ListWazeAlerts(
  $filter: TableWazeAlertFilterInput
  $limit: Int
  $nextToken: String
) {
  listWazeAlerts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getWazeIrregularity = `query GetWazeIrregularity($id: ID!) {
  getWazeIrregularity(id: $id) {
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
export const listWazeIrregularities = `query ListWazeIrregularities(
  $filter: TableWazeIrregularityFilterInput
  $limit: Int
  $nextToken: String
) {
  listWazeIrregularities(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      AlertsCount
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
    nextToken
  }
}
`;
export const getWazeJam = `query GetWazeJam($id: ID!) {
  getWazeJam(id: $id) {
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
export const listWazeJams = `query ListWazeJams(
  $filter: TableWazeJamFilterInput
  $limit: Int
  $nextToken: String
) {
  listWazeJams(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTfwmHighwaysHeDapi = `query GetTfwmHighwaysHeDapi($_uuid: ID!) {
  getTfwm_highways_he_dapi(_uuid: $_uuid) {
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
export const listTfwmHighwaysHeDapis = `query ListTfwmHighwaysHeDapis(
  $filter: TableTfwm_highways_he_dapiFilterInput
  $limit: Int
  $nextToken: String
) {
  listTfwm_highways_he_dapis(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const getTfwmMetroDapi = `query GetTfwmMetroDapi($id: ID!) {
  getTfwm_metro_dapi(id: $id) {
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
export const listTfwmMetroDapis = `query ListTfwmMetroDapis(
  $filter: TableTfwm_metro_dapiFilterInput
  $limit: Int
  $nextToken: String
) {
  listTfwm_metro_dapis(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTfwmRailLocallinesDapi = `query GetTfwmRailLocallinesDapi($id: Int!) {
  getTfwm_rail_locallines_dapi(id: $id) {
    id
    line_name
    lower_lin
    name
    spatial
  }
}
`;
export const listTfwmRailLocallinesDapis = `query ListTfwmRailLocallinesDapis(
  $filter: TableTfwm_rail_locallines_dapiFilterInput
  $limit: Int
  $nextToken: String
) {
  listTfwm_rail_locallines_dapis(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      line_name
      lower_lin
      name
      spatial
    }
    nextToken
  }
}
`;
export const getTfwmRailNrailDapi = `query GetTfwmRailNrailDapi($id: ID!) {
  getTfwm_rail_nrail_dapi(id: $id) {
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
export const listTfwmRailNrailDapis = `query ListTfwmRailNrailDapis(
  $filter: TableTfwm_rail_nrail_dapiFilterInput
  $limit: Int
  $nextToken: String
) {
  listTfwm_rail_nrail_dapis(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
