<template lang="">
    <!-- Menu -->
    <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
        <div class="app-brand demo">


            <a href="index.html" class="app-brand-link">
                <span class="app-brand-text demo menu-text fw-bold ms-2">
                    MOLSW
                </span>
            </a>

            <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                <i class="bx bx-chevron-left bx-sm d-flex align-items-center justify-content-center"
                ></i>
            </a>
        </div>

        <div class="menu-inner-shadow"></div>

        <ul class="menu-inner py-1">
            <!-- Dashboards -->
            <li class="menu-item active open">
                <a href="javascript:void(0);" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-home-smile"></i>
                    <div class="text-truncate" data-i18n="Dashboards">
                        ໜ້າຫຼັກ
                    </div>
                </a>
            </li>

            <!-- Layouts -->
            <li class="menu-item">
                <router-link to="/Article" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx bx-layout"></i>
                    <div class="text-truncate" data-i18n="Layouts">ຂ່າວສານ</div>
                </router-link>
            </li>

            <!-- Front Pages -->
            <li class="menu-item">
                <router-link to="/Article_Type" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx bx-store"></i>
                    <div class="text-truncate" data-i18n="Front Pages">
                        ໝວດໝູ່ຂ່າວ
                    </div>
                    <div
                        class="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto"
                    ></div>
                </router-link>
            </li>
            <!-- Front Pages -->
            <li class="menu-item">
                <router-link to="/Category" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx bx-store"></i>
                    <div class="text-truncate" data-i18n="Front Pages">
                        ປະເພດຂ່າວ
                    </div>
                    <div
                        class="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto"
                    ></div>
                </router-link>
            </li>
            <!-- Front Pages -->
            <li class="menu-item">
                <router-link to="/Author" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx bx-store"></i>
                    <div class="text-truncate" data-i18n="Front Pages">
                        ຜູ້ຂຽນຂ່າວ
                    </div>
                    <div
                        class="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto"
                    ></div>
                </router-link>
            </li>
            <!-- Front Pages -->
            <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx bx-store"></i>
                    <div class="text-truncate" data-i18n="Front Pages"></div>
                    <div
                        class="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto"
                    ></div>
                </a>
            </li>
            <!-- Front Pages -->
            <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx bx-store"></i>
                    <div class="text-truncate" data-i18n="Front Pages">
                        ປະເພດຂ່າວ
                    </div>
                    <div
                        class="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto"
                    ></div>
                </a>
            </li>

            <!-- Apps & Pages -->
            <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Post &amp; Ads</span>
            </li>
            <li class="menu-item">
                <a
                    href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-email.html"
                    target="_blank"
                    class="menu-link"
                >
                    <i class="menu-icon tf-icons bx bx-envelope"></i>
                    <div class="text-truncate" data-i18n="Email">Email</div>
                    <div
                        class="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto"
                    ></div>
                </a>
            </li>
            <li class="menu-item">
                <a
                    href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/app-chat.html"
                    target="_blank"
                    class="menu-link"
                >
                    <i class="menu-icon tf-icons bx bx-chat"></i>
                    <div class="text-truncate" data-i18n="Chat">Chat</div>
                    <div
                        class="badge rounded-pill bg-label-primary text-uppercase fs-tiny ms-auto"
                    ></div>
                </a>
            </li>

            <!-- Pages -->
            <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-dock-top"></i>
                    <div class="text-truncate" data-i18n="Account Settings">
                        Account Settings
                    </div>
                </a>
            </li>

            <!-- Components -->
            <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Components</span>
            </li>
            <!-- Cards -->
            <li class="menu-item">
                <a href="cards-basic.html" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-collection"></i>
                    <div class="text-truncate" data-i18n="Basic">Cards</div>
                </a>
            </li>
            <!-- User interface -->
            <li class="menu-item">
                <a href="javascript:void(0)" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-box"></i>
                    <div class="text-truncate" data-i18n="User interface">
                        User interface
                    </div>
                </a>
            </li>

            <!-- Extended components -->

            <li class="menu-item">
                <a href="icons-boxicons.html" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-crown"></i>
                    <div class="text-truncate" data-i18n="Boxicons">
                        Boxicons
                    </div>
                </a>
            </li>

            <!-- Forms & Tables -->
            <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Forms &amp; Tables</span>
            </li>
            <!-- Forms -->
            <li class="menu-item">
                <a href="javascript:void(0);" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-detail"></i>
                    <div class="text-truncate" data-i18n="Form Layouts">
                        Form Layouts
                    </div>
                </a>
            </li>
            <!-- Form Validation -->

            <!-- Data Tables -->
            <li class="menu-item">
                <a
                    href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/tables-datatables-basic.html"
                    target="_blank"
                    class="menu-link"
                >
                    <i class="menu-icon tf-icons bx bx-grid"></i>
                    <div class="text-truncate" data-i18n="Datatables">
                        Datatables
                    </div>
                </a>
            </li>
            <!-- Misc -->
            <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Misc</span>
            </li>
            <li class="menu-item">
                <a
                    href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                    target="_blank"
                    class="menu-link"
                >
                    <i class="menu-icon tf-icons bx bx-support"></i>
                    <div class="text-truncate" data-i18n="Support">Support</div>
                </a>
            </li>
            <li class="menu-item">
                <a
                    href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/"
                    target="_blank"
                    class="menu-link"
                >
                    <i class="menu-icon tf-icons bx bx-file"></i>
                    <div class="text-truncate" data-i18n="Documentation">
                        Documentation
                    </div>
                </a>
            </li>
        </ul>
    </aside>
    <!-- / Menu -->
</template>
<script>
export default {};
</script>
<style lang=""></style>
