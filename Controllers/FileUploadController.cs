using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Configuration;
using Microsoft.Net.Http.Headers;
using BurtsonFileUploader.Controllers;
using System.Net;

namespace BurtsonFileUploader.Controllers
{
    [Route("[controller]")]
    public class FileUploadController : Controller
    {
        private FamilyAuthorization _auth;

        public FileUploadController(FamilyAuthorization auth)
        {

            _auth = auth;
        }
        public IActionResult Index()
        {
            if (_auth.Authorized)
            {
                ViewData["Username"] = _auth.Username;

                var paths = System.IO.Directory.EnumerateFiles($@"C:\dev\mystuff\BurtsonFileUploader\ImageUploads\");
                var fileNames = paths.Select(x => x.Substring(x.LastIndexOf("\\") + 1));
                return View(fileNames);

            }

            return RedirectToRoute(new { Controller = "Home", Action = "Index" });
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Upload(List<IFormFile> files)
        {
            long size = files.Sum(f => f.Length);

            // full path to file in temp location
            var filePath = string.Empty;
            foreach (var formFile in files)
            {

                var start = formFile.FileName.LastIndexOf('\\') + 1;

                var parsedName = formFile.FileName.Substring(start);

                filePath = $@"C:\dev\mystuff\BurtsonFileUploader\ImageUploads\{parsedName}";

                if (formFile.Length > 0)
                {
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await formFile.CopyToAsync(stream);
                    }
                }
            }

            // process uploaded files
            // Don't rely on or trust the FileName property without validation.

            return Ok(new { count = files.Count, size, filePath });
        }
    }
    public class FamilyAuthorization
    {
        public string Username { get; set; }
        public Boolean Authorized { get; set; }
        public Cookie Cookie { get; set; }
    }
}
