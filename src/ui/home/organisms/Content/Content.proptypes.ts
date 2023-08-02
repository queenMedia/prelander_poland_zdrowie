export interface Props {
  bucket: Bucket;
  offer: any;
  character: any;
  redirect: any;
}

interface Bucket {
  fullName: string;
  firstName: string;
  lastName: string;
  contentKeys: {
    language: string;
    citizenText: string;
    countryName: string;
  };
  targetKeys: {
    countryName: string;
    capital: string;
    countryCode: string;
  };
  targetCurrency: {
    code: string;
    symbol: string;
    name: string;
  };
  subtitle: string;
  title: string;
  offerBarText: string;
  firstSection: {
    ImgDescription: string;
    celebrityDescription: string;
  };
  whitdrawalText: {
    top: string;
    bottom: string;
  };
  modal: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  offers: any;
}
