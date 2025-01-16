export function standardizeAddress(address: string): { houseNumber: string; streetName: string; direction: string | undefined } {
  // Regular expression to match the house number and street name
  const regex = /^(?<houseNumber>\d+)\s*(?<direction>NW|NE|SW|SE)?\s*(?<streetName>\w+)?\s*(?<streetType>[\w\s]*)/i;

  const replacementValues = {
    SOUTHWEST: "SW",
    SOUTHEAST: "SE",
    NORTHEAST: "NE",
    NORTHWEST: "NW",
    "SOUTH WEST": "SW",
    "SOUTH EAST": "SE",
    "NORTH EAST": "NE",
    "NORTH WEST": "NW",
  };

  // Replace full directions with abbreviations
  let modifiedAddress = address.toUpperCase().replaceAll(/[^\w\s]/g, ""); // Remove any non-word character from the input string, such that something like "S.W." becomes "SW"
  for (const [key, value] of Object.entries(replacementValues)) {
    modifiedAddress = modifiedAddress.replace(key, value);
  }

  // Dictionary to standardize common abbreviations (all in uppercase for case-insensitive matching)
  const streetAbbreviations = {
    ST: "Street",
    RD: "Road",
    AVE: "Avenue",
    BLVD: "Boulevard",
    DR: "Drive",
    LN: "Lane",
    CT: "Court",
    PL: "Place",
    TER: "Terrace",
    TERR: "Terrace",
    PKWY: "Parkway",
    CIR: "Circle",
    HWY: "Highway",
    "AVE RD": "Avenue Road",
    "AVENUE RD": "Avenue Road",
    "AVE ROAD": "Avenue Road",
    // Add more abbreviations as needed
  };

  // Function to capitalize the first letter of each word
  function capitalizeWord(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  function capitalizeWords(words: string) {
    return words.split(" ").map(capitalizeWord).join(" ");
  }

  const result = regex.exec(modifiedAddress);
  if (result && result.groups) {
    const { houseNumber, direction, streetName, streetType } = result.groups;
    let combinedStreetName =
      // @ts-expect-error
      `${capitalizeWord(streetName.replace(/(st|th|nd|rd)$/i, ""))} ${streetAbbreviations[streetType] ?? capitalizeWords(streetType)}`.trim();
    return { houseNumber, streetName: combinedStreetName, direction: direction?.toUpperCase() ?? "SW" };
  }
  console.error(
    `Address: ${address} does not match the regex to extract house number and street name. Returning the original address for all fields.`,
  );
  return { houseNumber: address, streetName: address, direction: address };
}
