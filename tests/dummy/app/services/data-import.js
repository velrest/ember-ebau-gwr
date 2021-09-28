import Service from "@ember/service";

const buildingEntrances = [
  {
    buildingEntranceNo: "12c",
    locality: {
      swissZipCode: 1234,
      name: {
        nameLong: "Place 0",
      },
    },
  },
  {
    buildingEntranceNo: "1",
    locality: {
      swissZipCode: 5678,
      name: {
        nameLong: "Place 1",
      },
    },
  },
];
const dwellings = [
  {
    EDID: 0, // not sure if information can be given
    floor: 3100,
    dwellingStatus: 3001,
    noOfHabitableRooms: 8,
    locationOfDwellingOnFloor: "Rechts",
    dwellingUsage: {
      usageCode: 3010,
    },
  },
  {
    EDID: 0,
    floor: 3101,
    dwellingStatus: 3002,
    noOfHabitableRooms: 3,
    locationOfDwellingOnFloor: "Links",
    dwellingUsage: {
      usageCode: 3020,
    },
  },
  {
    EDID: 0,
    floor: 3102,
    noOfHabitableRooms: 3,
    locationOfDwellingOnFloor: "Links",
    dwellingStatus: 3003,
    dwellingUsage: {
      usageCode: 3030,
    },
  },
  {
    EDID: 0,
    floor: 3401,
    noOfHabitableRooms: 3,
    locationOfDwellingOnFloor: "Links",
    dwellingStatus: 3004,
    dwellingUsage: {
      usageCode: 3035,
    },
  },
  {
    EDID: 0,
    floor: 3402,
    noOfHabitableRooms: 2,
    locationOfDwellingOnFloor: "Rechts",
    dwellingStatus: 3007,
    dwellingUsage: {
      usageCode: 3036,
    },
  },
];

export default class DataImport extends Service {
  async fetchProject() {
    return {
      constructionProjectDescription:
        "Donec mollis hendrerit risus. Fusce ac felis sit amet ligula pharetra condimentum.",
      typeOfConstructionProject: 6011,
      typeOfConstruction: 6213,
      totalCostsOfProject: 10000,
      typeOfPermit: 5001,
      projectAnnouncementDate: "2019-12-11",
      typeOfClient: 6101,
      client: {
        address: { street: "Gässli", houseNumber: 5 },
        identification: {
          organisationIdentification: {
            organisationAdditionalName: "Dev",
            localOrganisationId: {
              organisationId: "012.3456.7890",
              organisationIdCategory: "CH.ESTVID",
            },
          },
        },
      },
      buildings: [
        {
          kindOfWork: 6001,
          thermicSolarFacility: true,
          building: {
            buildingCategory: 1060,
            buildingStatus: 1004,
            officialBuildingNo: 12220054,
            buildingClass: 1271,
            nameOfBuilding: "Stall",
          },
          buildingEntrances,
          dwellings,
        },
        {
          kindOfWork: 6002,
          energeticRestauration: true,
          building: {
            buildingCategory: 1030,
            buildingStatus: 1004,
            officialBuildingNo: 300900,
            buildingClass: 1220,
            nameOfBuilding: "Haus",
          },
          buildingEntrances,
          dwellings,
        },
        {
          kindOfWork: 6007,
          otherWorks: true,
          building: {
            buildingCategory: 1080,
            buildingStatus: 1007,
            officialBuildingNo: 65900,
            buildingClass: 1251,
            nameOfBuilding: "Schopf",
          },
          buildingEntrances,
          dwellings,
        },
      ],
    };
  }
}
