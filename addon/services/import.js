import { action } from "@ember/object";
import Service, { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class ImportService extends Service {
  @service notification;
  @service intl;
  @service router;

  // This array is only used for tracking the still open diffs
  // so we can transition out of the import once the array is empty.
  // All diff state tracking is done in field.js
  @tracked _diffList = [];

  get diffList() {
    return this._diffList;
  }

  reset() {
    this._diffList = [];
  }

  finish() {
    this.notification.success(
      this.intl.t("ember-gwr.components.modelForm.diff.resolved")
    );
    this.router.transitionTo({
      queryParams: { import: false, index: undefined },
    });
  }

  @action
  registerDiff(attr) {
    if (!this._diffList.find((key) => key === attr)) {
      this._diffList.push(attr);
    }
  }

  @action
  resolveDiff(attr) {
    this._diffList = this._diffList.filter((key) => key !== attr);
    if (!this._diffList.length) {
      this.finishImport();
    }
  }

  @action
  importAllData(model, importData) {
    // We cannot just `Object.assign` here since the child object like `identification` would
    // not be classes with tracked fields etc. anymore but just pojos. We need to preserve the classes.
    const deepMerge = (original, objectToApply) => {
      Object.entries(objectToApply).forEach(([key, value]) => {
        typeof value === "object"
          ? deepMerge(original[key], objectToApply[key])
          : (original[key] = value);
      });
    };
    deepMerge(model, importData);
    this.finishImport();
  }
}
