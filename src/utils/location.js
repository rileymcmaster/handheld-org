export const getPosition = async () => {
  try {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const { latitude, longitude } = pos.coords;
    return { latitude, longitude };
  } catch (e) {
    // default to Montreal, because I live here
    return {
      latitude: "45.559596595813154",
      longitude: "-73.54969609220188",
    };
  }
};
