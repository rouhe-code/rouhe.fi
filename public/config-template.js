var configurationsFi = {
  servicesDescription: '',
  persons: [
    {
      name: '',
      skills: '',
      degrees: [
        {
          name: '',
          school: '',
          duration: '',
          description: ''
        }
      ]
    }
  ]
};

var configurationsEn = {
  servicesDescription: '',
  persons: [
    {
      name: '',
      skills: '',
      degrees: [
        {
          name: '',
          school: '',
          duration: '',
          description: ''
        }
      ]
    }
  ]
};

var configurations = {

  pageName: '',
  businessId: '',
  privateTrader: '',
  email: '',

  getTranslatedConfigurations(languageCode) {

    if(languageCode === 'fi') {
      return configurationsFi;
    } else if(languageCode === 'en') {
      return configurationsEn;
    }

    return null;
  }
};
