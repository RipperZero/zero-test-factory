declare module "@api.mockAPI" {
  // type GetUsersResObj = Array<{
  //   id: string;
  //   name: string;
  //   avatar: string;
  //   gender: string;
  //   userAgent: string;
  // }>;

  type GetPatientList = Array<{
    wardNumber: string;
    wardId: string;
    patientList: Array<{
      createdAt: string;
      name: string;
      kanaName: string;
      gender: string;
      department: string;
      ward: string;
      wardRoom: string;
      hospitalizationDay: number;
      ADL: number;
      diseaseCondition: number;
      treatment: number;
      patientId: string;
      wardId: string;
    }>;
  }>;
}
