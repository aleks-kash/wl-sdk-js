/**
 * Entry point for synchronization of staff member's calendar.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Calendar_Cordova_CordovaCalendarStaffModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Events that must be synchronized in calendar. See {@link Wl_Calendar_Cordova_CordovaCalendarModelAbstract.data()} for detailed description.
   *
   * @post result
   * @type {{}[]}
   */
  this.a_visit_actual = undefined;

  /**
   * Date of last sync.
   *
   * @post get
   * @type {string}
   */
  this.dtu_synced_last = undefined;

  /**
   * Business to synchronize calendar from.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Books/visits that are already synchronized in client's calendar.
   * Serialized list of pairs [[visit key ({@link \RsVisitSql}) => visit hash], ...].
   *
   * @post post
   * @type {string}
   */
  this.s_visit_synced = "";

  /**
   * User to synchronize calendar for.
   *
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Calendar_Cordova_CordovaCalendarStaffModel);

/**
 * @inheritDoc
 */
Wl_Calendar_Cordova_CordovaCalendarStaffModel.prototype.config=function()
{
  return {"a_field": {"a_visit_actual": {"post": {"result": true}},"dtu_synced_last": {"post": {"get": true}},"k_business": {"post": {"get": true}},"s_visit_synced": {"post": {"post": true}},"uid": {"post": {"get": true}}}};
};