cos sdk nee add this in tsconfig.json

allowSyntheticDefaultImports

add in app.module
    { provide: COS_CONFIG, useValue: { bucket: 'attachment-1252583813', region: 'ap-guangzhou', rootPath: 'contract/' } },

