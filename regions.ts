/*
    This script will export a default object containing
    a list of active Deno Deploy regions, sourced from
    https://deno.com/deploy/docs/regions and updated
    manually. Each region has a geographic name and a
    system name, the latter returned from the
    DENO_REGION environment variable on Deno Deploy.
*/

interface RegionObject {
    [key: string]: string;
  }

export default {
	"asia-east1": "Taiwan",
	"asia-northeast1": "Tokyo"
} as RegionObject;
