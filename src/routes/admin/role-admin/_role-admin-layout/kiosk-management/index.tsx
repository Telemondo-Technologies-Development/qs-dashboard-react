import { createFileRoute } from '@tanstack/react-router'
import { useKioskManagementStore } from '@/stores/admin/kioskMgmt';
import { useAdminGlobalStore } from '@/stores/admin/adminGlobalStore';
import { useEffect, useRef } from 'react';

export const Route = createFileRoute('/admin/role-admin/_role-admin-layout/kiosk-management/')({
  component: () => <KioskManagement/>
})

function KioskManagement() {
  const {
    isEdit,
    toggleEdit,
    editCategories,
    categories,
    addEditCategory,
    removeEditCategory,
    resetEditCategories,
  } = useKioskManagementStore();

  const { togglePreviewDialog } = useAdminGlobalStore();

  const categoryNameInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    resetEditCategories();
  }, [isEdit]);

  return (
    <div className="flex-1 p-8 transition-all">
      <div className="flex flex-col gap-8 p-6 bg-main_extra size-full rounded-3xl">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-main_primary">Categories</p>
          <div className="flex gap-3">
            <button
              onClick={isEdit ? () => {} : () => togglePreviewDialog("kiosk")}
              className="px-6 py-1 font-semibold rounded-sm bg-main_secondary text-main_primary"
            >
              {isEdit ? "Save Changes" : "Preview Kiosk"}
            </button>
            <button
              onClick={() => toggleEdit()}
              className="px-6 py-1 font-semibold text-white rounded-sm bg-main_primary"
            >
              {isEdit ? "Discard Changes" : "Edit Kiosk"}
            </button>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-5 grid-rows-2 gap-y-8 gap-x-8">
          {isEdit
            ? editCategories.map((editCategory, editCategoryKey) => {
                return (
                  <div className="relative flex flex-col gap-3 text-center">
                    <button
                      onClick={() => removeEditCategory(editCategory)}
                      className="absolute z-10 p-3 bg-red-500 rounded-full -top-3 -right-3"
                    >
                      <div className="absolute w-[40%] h-[2px] -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2"></div>
                    </button>
                    {editCategory.counterImage ? (
                      <div
                        key={editCategory.counterID}
                        style={{
                          backgroundImage: `url(${editCategory.counterImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        className="overflow-hidden rounded-lg size-full"
                      >
                        <div className="flex flex-col items-center justify-center gap-3 px-6 size-full bg-black/50">
                          <button className="w-full py-1 text-sm font-medium text-white rounded-md bg-main_primary">
                            Change Image
                          </button>
                          <button className="w-full py-1 text-sm font-medium rounded-md text-main_primary bg-main_secondary">
                            Remove Image
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div
                        key={editCategory.counterID}
                        className="flex flex-col items-center justify-center gap-3 border rounded-lg size-full border-main_primary"
                      >
                        <button className="px-6 py-1 text-sm font-medium text-white rounded-md bg-main_primary">
                          Upload Image
                        </button>
                        <p className="w-full px-3 text-xs text-main_primary">
                          {
                            "Please upload a square image (preferably 300x300 px) in .jpg, .jpeg, .png, .gif, .heic, or .heif format for optimal results."
                          }
                        </p>
                      </div>
                    )}
                    {editCategory.counterName ? (
                      <input
                        ref={(el) =>
                          (categoryNameInputRefs.current[editCategoryKey] = el)
                        }
                        placeholder={editCategory.counterName}
                        defaultValue={editCategory.counterName}
                        className="py-[2px] pl-2 text-sm rounded-md whitespace-nowrap text-center"
                      ></input>
                    ) : (
                      <input
                        ref={(el) =>
                          (categoryNameInputRefs.current[editCategoryKey] = el)
                        }
                        placeholder="Input Category Name"
                        className="py-[2px] pl-2 text-sm rounded-md whitespace-nowrap text-center"
                      ></input>
                    )}
                  </div>
                );
              })
            : categories.map((category) => {
                return (
                  <div className="relative flex flex-col gap-3 text-center">
                    {category.counterImage ? (
                      <div
                        key={category.counterID}
                        style={{
                          backgroundImage: `url(${category.counterImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        className="overflow-hidden rounded-lg size-full"
                      ></div>
                    ) : (
                      <div className="grid text-5xl text-white rounded-lg size-full bg-black/50 place-items-center">
                        {category.counterName?.charAt(0)}
                      </div>
                    )}
                    <p className="text-sm whitespace-nowrap py-[2px]">
                      {category.counterName}
                    </p>
                  </div>
                );
              })}
          {isEdit && editCategories.length < 10 ? (
            <button
              onClick={() => addEditCategory()}
              className="relative flex flex-col items-center justify-center text-2xl font-semibold text-gray-400 border-2 border-gray-400 border-dashed rounded-lg"
            >
              <div className="absolute p-3 bg-green-500 rounded-full -top-3 -right-3">
                <div className="absolute w-[40%] h-[2px] -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2"></div>
                <div className="absolute w-[2px] h-[40%] -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2"></div>
              </div>
              <p>ADD</p>
              <p>CATEGORY</p>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}