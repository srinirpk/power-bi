// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require powerbi-client



function generate_report()
{

        var embedVar = {"reportId":$("#reportId").val() ,
        "embedUrl":$("#embedURL").val(),
        "EmbedToken": $("#accessToken").val()

        }


        var models = window['powerbi-client'].models;
        var permissions = models.Permissions.All;
        var embedConfiguration = {
            type: 'report',
            id: embedVar["reportId"],
            embedUrl: embedVar["embedUrl"],
            tokenType: 1,
            accessToken: embedVar["EmbedToken"],
            permissions: permissions,
            settings: {
              panes: {
                filters: {
                  visible: true
                },
                pageNavigation: {
                  visible: true
                }
              }
            }
        };

        var reportContainer = $('#reportContainer')[0];
        var report = powerbi.embed(reportContainer, embedConfiguration);

        // Report.off removes a given event handler if it exists.
        report.off("loaded");

        report.off("rendered");

        $("#reportContainer iframe").attr('style','min-height:550px;min-width:1299px;')
}
/*function config()
{
    var getEmbedToken = "H4sIAAAAAAAEAB2WxQ7sWBJE_-Vt3ZKZWuqF2S4zw85YZubR_PvU9D51dRUZEXn-88dKn35Kiz9__-G7zEZhBXE-XX2VxxBZiHi3sFCNWgl1J30GCki9jxXTSymzbm3UgtNNHSPR1yF8dh_e7wK6S4AqgifeOH-x6EXczitD6q9WWHzT5tdE-gzNkDYSpAFWHU3ocH5XGwhRL0JusbZ_KuvUczhm8p5W8Js1VbsgmCk0CgN4D1BzBr4F-3SmMn0Y11OmQH2gWZCRIqA58DZWRS66j4kD2g3XKvPMdwUuD7rbtJkVgQQ7baO4qLsUxoREvxLGbtiE_D6xL1yzpypid2CUtZeOvtCFVbW7hO4sDJ8F_xaTYXV4kuPEYbb9V_B3M32ZFODxitxMdz9BnfE-canTIjay1rfNaV3SQjRmXP_JpdFUtAbencyLqcJ2lIs5eZuXFbaZjA0T3khECWoKnCm-PhmXQSeebXTYihVUVu8xveetnhLNuCuNF0NX5Zc7n41DeoxzrSasslyWDp_M5o6N3ySleCsaDKpIMHC_FXg1k3aMrCiDdulcgnKoQAdDNZ3BiBS2-DLz06ZjReAXwKBx8BogmHcBiLvsKh3S2O-MTxJKIWKDIyTEAoaBK64l5V7aGvNGojyCKoCNJjwW-ngv1549fdyf-yrz5JCEneCGMaNBoh6n7enUrMFMrxDiT4D2a4uLmKy8SJYq2dB1ZUqaFQf3-arNqahdbm6bBJscluUeOnvNOYl4y5b5ZiE275J7_BQoZ2rrUVKRH48oLd8yDWHNuJDTKP1l3Y3PvJJAWOcpfINLX0vTwzTh8w4la1_j4Te1ku-pbdEyokC2DjAq5CArCc5pp0zz4mVxg7lgxopUSpiPs1B9nxyye48qTSDS7q6Sk0v_sNmjIFGv5O0dMQfisKqwgF4-kQB-Zdd8jCloER0sdMyo9NxE1yl6_RIh22q6Ivc3m-fjKEaPkQENscW7kosD4iAXezCSKKqfgzjSRUPBhyZYh1tNc8P60xiuROpb3SeBpMNRI4PGiFEGwwT2TN_AQpr9-RVuIR7fTPyYpyIN9Dp45MyZ1bkptFSq8SNQm_wYZDGpHBTxfbcS9qdubd3ta-dysnYYdKz1I7Cxannu8KERn-BkgtBN6-oeNu8N9Jrxx4KGhzDcIk0-WJiSOdq4dus7gT6kyBGOhkip3V6P8uDRo4Be6m-bVJRSQWkzN7yhjUYBD4ux6Tm586eI2m1rmVLe0_SpQgIdAPsUb9_yrBaMryuTgSJHzD-tvOP6OO2kDtXFlntT8ty1VRF5XMh0H9QZSYFZWvvzL8QTnaipSTxz98RHYjudlR7vEOcK9w0TF62QdtRdck3Q6aq3jqYUC5lnLWuY9opRcl2e8LsLXZgteSwIVYNBRLloyVuVLEmuCA6yzEfgza-0cKD0tIi1sJZlk9LQ7Awze4hqv65eFxRPwumwzfAUvgP8eY4gAU0uDI9D2mtWoO7v-WE-4Sa5HkmE5esoiuAzqXxOynCw9FF8WDf-sCL3BtfW2phMWBmpn-Bpo5I8x1gUaImNW5rIBA-MGTwg0wMFgdwBGm9mARllMXQK2RaMA3uyix_HPHNuYw-SSN0n3bZa3uGC_NUlHRhDn3GMIX_7stFWP6w09ysIx-eEADpEl_ECQF3IGh6TOzCcc_kNDT0kg9KKcB3FsWOTIjOQ6DUa5iOENLg1v1ZUyOaJmASjYUaGLsTuPruKy9khr7WnvRglpiJaz6HgKqivZvtkSjVDD6PpdlZgtR-KrrUchzZtxBdMKmbUi5WvsmVGKQwqjWV6LoBkGWxKCmruqaVkWhdAgoZwIL9R0NyhQKjr3ID4Y9369fHjheQpu2Ms3RQWvR-Uwiev1ttkE-ZFHD-x3Zt5s3yvWqK7lIVRuimpgXXyCPu6QQjf0qdoKwk4M1tNWF11GtCfuRINP9Nev0Yrqci8YNVG6lrMXngjarARYsMR79F3BaMKvjttaH-lx8_Tl2EP3iHtxMcO2CMDEBLC-qXAPe3GkteJ4hCt9qcVSd-pNjMbkrC_MGb5wyV-Mz-1lYzrAQRfv7PJPOF1V5x030DFkZL1pK6GnQ2-gS9l99DrD0bIiyfaGxgQOnAMGVRYzTmOLlcYpKowK3mv_ZngEZkpa4d1KFCVgNHKF6sjV0vpdyOyxosno321ZZgDtzxuB8Du8k5BvqzP7HsioxULnhTq3CvazG81TiZB9xtQg9pkMCEHy1b9_CzblCaIj-ImiR9EP9ZYC_Yj6e0l7XhizGw1lF-c5_ftzmVVunmfWF-MX9S2eyfQkxz-fDcOZHTw0LR6iiWKrOTaNSGx4z73W9RjoiwYuCN-p7UHraN9gUIelP_z568_3PrM-6SWzw99pERocbuuVTGr58jLmugDNbeYC9xjbCuTPL8uojC-1Be_glu6AxcbZH_uUOKIRppu9aiaEXyzbvWpDPlpkqvNmj3S9c3WatT9aRXebqqeH4qxwwXu3sp1gvQgs-pO90CNk1So9RXC1q833PFUn26AZU9j1siJ9mN8qh7ppvaHaPY4zVfaE4-RCiuV871oxvtJyvAzAkCEN9O5hpuRWr_-jGH1i0QN1Drc6Yx43_OkvUuMkFyukjQbPFUmnf_ohzGMSGX0a_iqInYp7j4wCo-GS6iFtNzLVgq8V1mYnVGMoSNFgbh8o9-jWhX01FJqhKV721PP49alVyZNtbfbkmvX2fv951-Zn7kuVyX4qayzvxbLpWH-0dtHjwH0R1gR8--U23zHdD_W8jemlumgyb_7xX5RCaw0Y_NIPmV8ju88fOI8tpg1-mPbAGAn8A8sWH8-qaSM4x--DUtswzkJ7IwEHwe29mLODpmUlyJkxi3lyGi26dxKkjnZOMhekQ4vfASJAONNzQluXEduychY3UawoVNWqvAZphEcUMxJMI1L9AbJYd2zqkOEIqA8Qt08cHiKA7_TqE7sAeci5yRAdpCAkhy3dPaVPlf9nQ5zzDd-fHejqG_XRxvv_agHiiFgnvzVBKdnx0XoiTl8ngARFWY7YKae5n538bHK4r3eDnCEw-C3y-iIBuow-ldHSJUxaIN6plQxghH4sjXFYuD3DBrpbphf8NQwxVaHW-__y_zf_wHi_0P57gsAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19";
    var id = "f6bfd646-b718-44dc-a378-b73e6b528204";
    var embedUrl = "https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlfX0%3d";

    return {"EmbedToken":getEmbedToken,"reportId":id,"embedUrl":embedUrl}
}*/
