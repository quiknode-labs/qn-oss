// https://antonball.medium.com/extending-rollup-configuration-for-nx-a568cec16bf4

const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup')

module.exports = (config) => {
    // console.log(`config = ${JSON.stringify(config, null, 2)}`);
    const nxConfig = nrwlConfig(config);
    // nxConfig.input = { input: nxConfig.input }
    nxConfig.output.name = 'Icy NFT Hooks';
    
    const format = process.env['FORMAT'] ?? 'esm'
    // console.log(`env format = ${format}; current format = ${nxConfig.output.format}`)
    nxConfig.output.format = format
    
    // console.log(`nxConfig = ${JSON.stringify(nxConfig, null, 2)}`);

    return nxConfig;
}

