export default function useCountry() {
    function getCallingCode(idd) {
      if(!idd) return "N/A";

        return `${idd?.root || ""}${idd?.suffixes?.[0] || ""}` || "N/A";
    }

    function getTheNativeName(nativeName) {
        // const nativeNameArray = [];
        // for (const key in nativeName) {
        //   nativeNameArray.push(`(${key})  ${nativeName[key]?.official}`);
        // }
        // return nativeNameArray.join(", ");
        
        // return nativeName?.[Object.keys(nativeName)[0]]?.official;
        for (const key in nativeName) {
          return nativeName[key]?.official;
        }
      
        return "N/A";
      }

    return { getCallingCode, getTheNativeName }
}