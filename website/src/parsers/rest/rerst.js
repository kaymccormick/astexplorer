import defaultParserInterface from '../utils/defaultParserInterface';
import { parse as restParse } from 'docutils-js';

const ID = 'rest'

export default {
    ...defaultParserInterface,
    id: ID,
    displayName: ID,
    version: '1.0',
    locationProps: new Set(['position']),
  loadParser(callback) {
    require(['docutils-js'], callback);
  },

  parse(docutils, code, options) {
      return docutils.pojoTranslate(docutils.parse(code, { settings: options }));
  },

  opensByDefault(node, key) {
    return key === 'children';
  },

  getDefaultOptions() {
      return {
	  tocBacklinks: 'entry',
	  footnoteBacklinks: 'true',
    sectionNumbering: 'true',
    reportLevel: 2,
    haltLevel: 4,
    exitStatusLevel: 5,
    debug: 'false',
    traceback: 'null',
    inputEncodingErrorHandler: 'strict',
    outputEncoding: 'utf-8',
    outputEncodingErrorHandler: 'strict',
    errorEncodingErrorHandler: 'strict',
    errorEncoding: 'utf-8',
    languageCode: 'en',
    recordDependencies: 'null',
    idPrefix: '',
    autoIdPrefix: 'id',
    dumpSettings: 'null',
    dumpInternals: 'null',
    dumpTransforms: 'null',
    dumpPsuedoXml: 'null',
    exposeInternalAttribute: 'null',
    strictVisitor: 'null',
    warningStream: 'null',
    // html writer
    mathOutput: 'HTML math.css',
    initialHeaderLevel: 1,
    tableStyle: '',
    };
  },
  _getSettingsConfiguration() {
    return {
	fields : [
            ['haltLevel', [1,2,3,4,5]],
	    ['tocBacklinks', ['entry']],
	    ['footnoteBacklinks', ['true', 'false']]
	    ['sectionNumbering', ['true','false']],
            ['reportLevel', [1,2,3,4,5]],
            ['exitStatusLevel', [1,2,3,4,5]],
	    ['debug', [false]],
	    ['traceback', [null]],
	    ['inputEncodingErrorHandler', ['strict']],
/*    outputEncoding: 'utf-8',
    outputEncodingErrorHandler: 'strict',
    errorEncodingErrorHandler: 'strict',
    errorEncoding: 'utf-8',
    languageCode: 'en',
    recordDependencies: null,
    idPrefix: '',
    autoIdPrefix: 'id',
    dumpSettings: null,
    dumpInternals: null,
    dumpTransforms: null,
    dumpPsuedoXml: null,
    exposeInternalAttribute: null,
    strictVisitor: null,
    warningStream: null,
    // html writer
    mathOutput: 'HTML math.css',
    initialHeaderLevel: 1,
    tableStyle: '',
*/

      ],
    };
  },

};
    
    
  
