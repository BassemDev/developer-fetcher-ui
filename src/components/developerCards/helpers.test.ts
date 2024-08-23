import { splitArryToChunk } from "./helpers";

test("Should split number array to equal 5 item arrays", () => {
    // Given
    const tab = [1,7,12,6,7,8,0,16];

    // When
    const arrays = splitArryToChunk(tab,5);
    const expectedArrays = [[1,7,12,6,7], [8,0,16]];

    // Then
    expect(arrays).toBe(expectedArrays);
});