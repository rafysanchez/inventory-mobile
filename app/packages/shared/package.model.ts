export class Package {
    Id: number;
    Label: string;
    PackageType: string;
    SourceHarvestNames: string;
    RoomId: number;
    RoomName: string;
    Quantity: number;
    UnitOfMeasureName: string;
    UnitOfMeasureAbbreviation: string;
    ProductId: number;
    ProductName: string;
    ProductCategoryName: string;
    PackagedDate: string;
    InitialLabTestingState: string;
    LabTestingState: string;
    LabTestingStateName: string;
    LabTestingStateDate: string;
    IsProductionBatch: boolean;
    ProductionBatchNumber: string;
    IsTestingSample: boolean;
    IsProcessValidationTestingSample: boolean;
    ProductRequiresRemediation: boolean;
    ContainsRemediatedProduct: boolean;
    RemediationDate: string;
    ReceivedFromManifestNumber: number;
    ReceivedFromFacilityLicenseNumber: string;
    ReceivedFromFacilityName: string;
    ReceivedDateTime: string;
    IsOnHold: boolean;
    ArchivedDate: string;
    FinishedDate: string;
    LastModified: string;
    imageUrl: string;
    imageStoragePath: string;

    constructor(options: any) {
        this.Id = Number(options.Id);
        this.Label = options.Label;
        this.PackageType = options.PackageType;
        this.SourceHarvestNames = options.SourceHarvestNames;
        this.RoomId = Number(options.RoomId);
        this.RoomName = options.RoomName;
        this.Quantity = Number(options.Quantity);
        this.UnitOfMeasureName = options.UnitOfMeasureName;
        this.UnitOfMeasureAbbreviation = options.UnitOfMeasureAbbreviation;
        this.ProductId = Number(options.ProductId);
        this.ProductName = options.ProductName;
        this.ProductCategoryName = options.ProductCategoryName;
        this.PackagedDate = options.PackagedDate;
        this.InitialLabTestingState = options.InitialLabTestingState;
        this.LabTestingState = options.LabTestingState;
        this.LabTestingStateName = options.LabTestingStateName;
        this.LabTestingStateDate = options.LabTestingStateDate;
        this.IsProductionBatch = Boolean(options.IsProductionBatch);
        this.ProductionBatchNumber = options.ProductionBatchNumber;
        this.IsTestingSample = Boolean(options.IsTestingSample);
        this.IsProcessValidationTestingSample = Boolean(options.IsProcessValidationTestingSample);
        this.ProductRequiresRemediation = Boolean(options.ProductRequiresRemediation);
        this.ContainsRemediatedProduct = Boolean(options.ContainsRemediatedProduct);
        this.RemediationDate = options.RemediationDate;
        this.ReceivedFromManifestNumber = Number(options.ReceivedFromManifestNumber);
        this.ReceivedFromFacilityLicenseNumber = options.ReceivedFromFacilityLicenseNumber;
        this.ReceivedFromFacilityName = options.ReceivedFromFacilityName;
        this.ReceivedDateTime = options.ReceivedDateTime;
        this.IsOnHold = Boolean(options.IsOnHold);
        this.ArchivedDate = options.ArchivedDate;
        this.FinishedDate = options.FinishedDate;
        this.LastModified = options.LastModified;
        this.imageUrl = options.imageUrl;
        this.imageStoragePath = options.imageStoragePath;
    }
}
