function qnCustomNaming(str) {
  // Add "Codegen" prefix to all generated types, to be explicit that they are generated
  if (!str.startsWith('Codegen')) {
    return 'Codegen' + str;
  }
  return str;
}
module.exports = qnCustomNaming;
