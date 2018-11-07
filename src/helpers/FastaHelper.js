// http://www.dnacoil.com/tools/validate-dna-fasta-file-with-a-javascript-function/

const splitFastaInput = (input) => {

  const parsedSequences = [];

  if (!input) {
    return {
      'error': 'Empty input.'
    }
  }

  if (!input.startsWith('>')) {
    return {
      'error': 'Not a valid Fasta input.'
    };
  }

  // remove > to prevent getting empty string with split
  input = input.substr(1);

  const sequences = input.split('>');

  for (let i = 0; i < sequences.length; i++) {
    const sequenceSplit = sequences[i].split('\n');

    if (!sequenceSplit || sequenceSplit.length === 0) {
      continue;
    }

    const id = sequenceSplit[0];
    const remaining = sequenceSplit.slice(1);
    const sequenceString = remaining.join('');

    if (validateDNA(sequenceString)) {
      parsedSequences.push({
        'id': id,
        'seq': sequenceString
      });
    }
  }

  return parsedSequences;
};

const validateDNA = (sequence) => {
  sequence = sequence.trim();

  const lines = sequence.split('\n');

  if (sequence[0] === '>') {
    lines.splice(0, 1);
  }

  sequence = lines.join('').trim();

  return sequence.search(/[^gatc\s]/i) === -1;
};

module.exports = {
  splitFastaInput
};